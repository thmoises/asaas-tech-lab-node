import { PaymentRequestDTO } from '../dtos/payment/payment-request.dto';
import AsaasClient from '../integration/asaasClient';
import { AsaasCreatePaymentRequestDTO } from '../integration/dtos/asaas-create-payment-request.dto';
import { PaymentResponseDTO } from '../dtos/payment/payment-response.dto';
import { PaymentListResponseDTO } from '../dtos/payment/payment-list-response.dto';

class PaymentServices {
  private asaasClient: AsaasClient;

  constructor() {
    this.asaasClient = new AsaasClient();
  }

  async create(createPaymentDTO: PaymentRequestDTO): Promise<PaymentResponseDTO> {
    const customer = await this.asaasClient.createCustomer(createPaymentDTO.customer);

    const asaasCreatePaymentRequest: AsaasCreatePaymentRequestDTO = {
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

  async findAll(): Promise<PaymentListResponseDTO> {
    const response = await this.asaasClient.listPayment();
    const filteredData = response.data.map((item) => ({
      value: item.value,
      dueDate: item.dueDate,
      description: item.description,
      billingType: item.billingType,
      status: item.status,
      customer: item.customer,
    }));

    const paymentListResponse = {
      totalCount: response.totalCount,
      limit: response.limit,
      offset: response.offset,
      data: filteredData,
    };

    return paymentListResponse;
  }
}

export default PaymentServices;
