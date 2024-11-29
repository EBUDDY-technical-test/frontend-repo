import * as yup from 'yup';

export const updateUserSchema = yup.object().shape({
  id: yup.string().required('Id is required'),
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required'),
  phoneNumber: yup.string().required('Phone Number is required'),
})

export type UpdateUserSchema = yup.InferType<typeof updateUserSchema>
