import PaymentServices from '../services/payment-services';
import { Request, Response } from 'express';
import { handleError } from '../helpers/error-handler';
import { PaymentRequestDTO } from '../dtos/payment/payment-request.dto';
import { paymentSchema } from '../schemas/payment-schema';
import BillingType from '../enums/payment/billing-type';
import CustomDateUtils from '../utils/date-utils';
import CustomBurstUtils from '../utils/burst-utils';
import CustomDailyUseUtils from '../utils/daily-use-utils';
import { getIssuer } from '../config/auth';

const paymentServices = new PaymentServices();
const customBurstUtils = new CustomBurstUtils();
const dailyUseUtils = new CustomDailyUseUtils();

//const redisURL = 'localhost:6379';
//const burstControll: any[] = [];

class PaymentController {
  async create(req: Request, res: Response) {
    const ip: string = (req.headers['x-forwarded-for'] as string) || (req.socket.remoteAddress as string);
    const authToken: string = req.headers['authorization'] as string;
    const username: any = getIssuer(authToken);
    const body = req.body;

    try {
      if (!customBurstUtils.tryUse(ip) || !dailyUseUtils.tryUse(username.iss)) {
        return res.status(519).json({ undefined, message: `Limite excedido.` });
      }

      await paymentSchema.validate(body);

      const paymentDto: PaymentRequestDTO = {
        customer: body.customer,
        billingType: body.billingType as BillingType,
        value: body.value,
        dueDate: CustomDateUtils.formatDate(new Date(body.dueDate)),
        description: body.description,
      };

      const data = await paymentServices.create(paymentDto);
      return res.status(200).json({ data, message: `Record created successfully.` });
    } catch (error) {
      return handleError(res, error);
    } finally {
      customBurstUtils.release(ip);
      //dailyUseUtils.release(username.iss);
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const data = await paymentServices.findAll();
      return res.status(200).json({ data });
    } catch (error) {
      console.log(error);
      return handleError(res, error);
    }
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await paymentServices.getById(id);
      return res.status(200).json(data);
    } catch (error) {
      return handleError(res, error);
    }
  }
}

export default PaymentController;
