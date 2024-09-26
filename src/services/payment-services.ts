import { PaymentRequestDTO } from '../dtos/payment/payment-request.dto';
import AsaasClient from '../integration/asaasClient';
import { AsaasCreatePaymentRequest } from '../integration/dtos/asaas-create-payment-request';
import { PaymentResponseDTO } from '../dtos/payment/payment-response.dto';

class PaymentServices {
  private asaasClient: AsaasClient;

  constructor() {
    this.asaasClient = new AsaasClient();
  }

  async create(createPaymentDTO: PaymentRequestDTO): Promise<PaymentResponseDTO> {
    const customer = await this.asaasClient.createCustomer(createPaymentDTO.customer);

    const asaasCreatePaymentRequest: AsaasCreatePaymentRequest = {
      customer: customer,
      value: createPaymentDTO.value,
      dueDate: createPaymentDTO.dueDate,
      billingType: createPaymentDTO.billingType,
      description: createPaymentDTO.description,
    };

    const response = await this.asaasClient.createPayment(asaasCreatePaymentRequest);

    const paymentResponse: PaymentResponseDTO = {
      value: response.value,
      dueDate: response.dueDate,
      description: response.description,
      billingType: response.billingType,
      status: response.status,
      customer: response.customer,
    };

    return paymentResponse;
  }
}

export default PaymentServices;
