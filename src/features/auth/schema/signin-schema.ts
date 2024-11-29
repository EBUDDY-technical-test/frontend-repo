import * as yup from 'yup';

export const signinSchema = yup.object().shape({
  email: 
    yup.string()
    .email('Please input a valid email')
    .required('Email is required field'),
  password: 
    yup.string()
    .required('Password is required field'),
});

export type SigninSchema = yup.InferType<typeof signinSchema>;
