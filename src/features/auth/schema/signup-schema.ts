import * as yup from 'yup';

export const signupSchema = yup.object().shape({
  email: 
    yup.string()
    .email('Please input a valid email')
    .required('Email is required field'),
  password: 
    yup.string()
    .min(6, 'Password must be longer than 6 character')
    .required('Password is required field'),
});

export type SignupSchema = yup.InferType<typeof signupSchema>;
