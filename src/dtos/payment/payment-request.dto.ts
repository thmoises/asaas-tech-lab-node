import { CustomerRequestDTO } from '../customer/customer-request.dto';
import BillingType from '../../enums/payment/billing-type';

export interface PaymentRequestDTO {
  customer: CustomerRequestDTO;
  billingType: BillingType;
  value: number;
  dueDate: string;
  description?: string;
}
