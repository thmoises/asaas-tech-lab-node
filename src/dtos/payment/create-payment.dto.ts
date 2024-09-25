import { CustomerAccountDTO } from './customer-account.dto';
import BillingType from '../../enums/payment/billing-type';

export interface CreatePaymentDTO {
  customerAccount: CustomerAccountDTO,
  billingType: BillingType,
  value: number,
  dueDate: string
}