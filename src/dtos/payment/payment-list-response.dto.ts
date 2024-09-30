import { PaymentResponseDTO } from './payment-response.dto';

export interface PaymentListResponseDTO {
  totalCount: number,
  limit: number,
  offset: number,
  data: PaymentResponseDTO[]
}
