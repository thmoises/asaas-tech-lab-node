import * as yup from 'yup';
import BillingType from '../enums/payment/billing-type';

const billingTypeValues = Object.values(BillingType).filter(value => typeof value === 'string');

export const paymentSchema = yup.object().shape({
  customer: yup
    .object()
    .shape({
      name: yup.string().required('Customer account name is required'),
      cpfCnpj: yup.string().required('Customer account CPF/CNPJ is required'),
    }).required(),
  billingType: yup
    .string()
    .oneOf(billingTypeValues)
    .required('Billing type is required'),
  value: yup.number().required('Value is required'),
  dueDate: yup.date().required('Due date is required'),
});