import { CreatePaymentDTO } from '../dtos/payment/create-payment.dto';

class PaymentServices {
  async create(createPaymentDTO: CreatePaymentDTO) {
    // to do: Integrar com o Asaas
    return createPaymentDTO
  }
}

export default PaymentServices;
