import { CustomerAccountDTO } from '../customerAccount/customer-account.dto';
import BillingType from '../../enums/payment/billing-type';

export interface CreatePaymentDTO {
  customer: CustomerAccountDTO,
  billingType: BillingType,
  value: number,
  dueDate: string
}