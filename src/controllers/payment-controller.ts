import PaymentServices from '../services/payment-services';
import { Request, Response } from 'express';
import { handleError } from '../helpers/error-handler';
import { CreatePaymentDTO } from '../dtos/payment/create-payment.dto';
import { paymentSchema } from '../schemas/payment-schema';
import BillingType from '../enums/payment/billing-type';
import CustomDateUtils from '../utils/date-utils';

const paymentServices = new PaymentServices();

class PaymentController {
  async create(req: Request, res: Response) {
    const body = req.body;

    try {
      await paymentSchema.validate(body);

      const paymentDto: CreatePaymentDTO = {
        customerAccount: body.customerAccount,
        billingType: body.billingType as BillingType,
        value: body.value,
        dueDate: CustomDateUtils.formatDate(new Date(body.dueDate))
      };

      const data = await paymentServices.create(paymentDto);
      return res.status(200).json({ data, message: `Record created successfully.` });
    } catch (error) {
      return handleError(res, error);
    }
  }
}

export default PaymentController;