export interface retrieveSinglePaymentDTO {
  object: string;
  id: string;
  dateCreated: string;
  customer: string;
  installment: string;
  paymentLink: string | null;
  value: number;
  netValue: number;
  originalValue: number | null;
  interestValue: number | null;
  description: string;
  billingType: string;
  pixTransaction: string | null;
  status: string;
  dueDate: string;
  originalDueDate: string;
  paymentDate: string | null;
  clientPaymentDate: string | null;
  installmentNumber: number;
  invoiceUrl: string;
  invoiceNumber: string;
  externalReference: string;
  deleted: boolean;
  anticipated: boolean;
  anticipable: boolean;
  creditDate: string | null;
  estimatedCreditDate: string | null;
  transactionReceiptUrl: string | null;
  nossoNumero: string;
  bankSlipUrl: string;
  lastInvoiceViewedDate: string | null;
  lastBankSlipViewedDate: string | null;
  discount: {
    value: number;
    limitDate: string | null;
    dueDateLimitDays: number;
    type: string;
  };
  fine: {
    value: number;
    type: string;
  };
  interest: {
    value: number;
    type: string;
  };
  postalService: boolean;
  custody: string | null;
  refunds: string | null;
}
