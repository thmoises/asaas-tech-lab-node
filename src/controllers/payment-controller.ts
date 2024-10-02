import PaymentServices from '../services/payment-services';
import { Request, Response } from 'express';
import { handleError } from '../helpers/error-handler';
import { PaymentRequestDTO } from '../dtos/payment/payment-request.dto';
import { paymentSchema } from '../schemas/payment-schema';
import BillingType from '../enums/payment/billing-type';
import CustomDateUtils from '../utils/date-utils';

const paymentServices = new PaymentServices();

class PaymentController {
  async create(req: Request, res: Response) {
    const body = req.body;

    try {
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
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const data = await paymentServices.findAll();
      return res.status(200).json({ data });
    } catch (error) {
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
