import * as yup from 'yup';

export const createUserSchema = yup.object().shape({
  email: yup.string().email().required('Email is required')
});