import axios, { AxiosInstance } from 'axios';
import { CreatePaymentDTO } from '../dtos/payment/create-payment.dto';
import { CustomerAccountDTO } from '../dtos/customerAccount/customer-account.dto';
import { PaymentResponseDTO } from '../dtos/payment/payment-response.dto';
import { CustomerAccountResponseDTO } from '../dtos/customerAccount/customer-account-response.dto';

class AsaasClient {
  private axiosInstance: AxiosInstance;

  private baseUrl: string = 'https://sandbox.asaas.com/api/v3';

  private apiKey: string = '';

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'access_token': this.apiKey,
        'Content-Type': 'application/json',
      },
    });
  }

  public async createPayment(paymentRequest: CreatePaymentDTO): Promise<PaymentResponseDTO> {
    const response = await this.axiosInstance.post<PaymentResponseDTO>('/payments', paymentRequest);
    console.log(response.data);
    return response.data;
  }

  public async createCustomer(customerAccountDTO: CustomerAccountDTO): Promise<string> {
    const response = await this.axiosInstance.post<CustomerAccountResponseDTO>('/customers', customerAccountDTO);
    return response.data.id;
  }
}

export default AsaasClient;