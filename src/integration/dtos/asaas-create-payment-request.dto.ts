import BillingType from '../../enums/payment/billing-type';

export interface AsaasCreatePaymentRequestDTO {
  customer: string;
  value: number;
  dueDate: string;
  billingType: BillingType;
  description?: string;
}
