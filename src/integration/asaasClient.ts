import axios, { AxiosInstance, AxiosError } from 'axios';
import { AsaasCreatePaymentRequestDTO } from './dtos/asaas-create-payment-request.dto';
import { CustomerRequestDTO } from '../dtos/customer/customer-request.dto';
import { PaymentResponseDTO } from '../dtos/payment/payment-response.dto';
import { CustomerResponseDTO } from '../dtos/customer/customer-response.dto';
import { PaymentListResponseDTO } from '../dtos/payment/payment-list-response.dto';
import { RetrieveSinglePaymentResponseDTO } from '../dtos/payment/retrieve-single-payment-response.dto';

interface AsaasError {
  errors: { code: string; description: string }[];
}

class AsaasClient {
  private axiosInstance: AxiosInstance;

  private baseUrl: string = "https://sandbox.asaas.com/api/v3";

  private apiKey: string = "$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAwODkyNTM6OiRhYWNoX2U5ODQ4ZTI2LWQxNDctNDRiNC05MmRiLTczM2YyY2Q0YmRiMg==";

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
      headers: {
        access_token: this.apiKey,
        'Content-Type': 'application/json',
      },
    });
  }

  public async createPayment(paymentRequest: AsaasCreatePaymentRequestDTO): Promise<PaymentResponseDTO> {
    try {
      const response = await this.axiosInstance.post<PaymentResponseDTO>('/payments', paymentRequest);
      return <PaymentResponseDTO>response.data;
    } catch (error) {
      throw new Error(this.handleError(error as AxiosError));
    }
  }

  public async listPayment(): Promise<PaymentListResponseDTO> {
    try {
      const response = await this.axiosInstance.get<PaymentListResponseDTO>('/payments');
      return <PaymentListResponseDTO>response.data;
    } catch (error) {
      throw new Error(this.handleError(error as AxiosError));
    }
  }

  public async retrieveSinglePayment(id: string): Promise<RetrieveSinglePaymentResponseDTO> {
    try {
      const response = await this.axiosInstance.get<RetrieveSinglePaymentResponseDTO>(`/payments/${id}`);
      return <RetrieveSinglePaymentResponseDTO>response.data;
    } catch (error) {
      throw new Error(this.handleError(error as AxiosError));
    }
  }

  public async createCustomer(customerDTO: CustomerRequestDTO): Promise<string> {
    try {
      const response = await this.axiosInstance.post<CustomerResponseDTO>('/customers', customerDTO);
      return response.data.id;
    } catch (error) {
      throw new Error(this.handleError(error as AxiosError));
    }
  }

  private handleError(error: AxiosError): string {
    if (error.response && error.response.data && (error.response.data as AsaasError).errors) {
      return (error.response.data as AsaasError).errors.map((err) => err.description).join(', ');
    }
    return 'An unexpected error occurred';
  }
}

export default AsaasClient;
