import { PaymentRequestDTO } from '../dtos/payment/payment-request.dto';
import AsaasClient from '../integration/asaasClient';
import { AsaasCreatePaymentRequestDTO } from '../integration/dtos/asaas-create-payment-request.dto';
import { PaymentResponseDTO } from '../dtos/payment/payment-response.dto';
import { PaymentListResponseDTO } from '../dtos/payment/payment-list-response.dto';
import { retrieveSinglePaymentDTO } from '../dtos/payment/retrieve-single-payment.dto';

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
    const { data, totalCount, limit, offset } = await this.asaasClient.listPayment();
    const filteredData = data.map(({ value, dueDate, description, billingType, status, customer }) => ({
      value,
      dueDate,
      description,
      billingType,
      status,
      customer,
    }));

    return { totalCount, limit, offset, data: filteredData };
  }

  async getById(id: string): Promise<retrieveSinglePaymentDTO> {
    return await this.asaasClient.retrieveSinglePayment(id);
  }
}

export default PaymentServices;
