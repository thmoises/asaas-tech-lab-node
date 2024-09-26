import BillingType from '../../enums/payment/billing-type';

export interface AsaasCreatePaymentRequest {
  customer: string
  value: number
  dueDate: string
  billingType: BillingType
  description?: string
}