export interface PaymentResponseDTO {
  value: number;
  dueDate: string;
  description: string;
  billingType: string;
  status: string;
  customer: string;
}
