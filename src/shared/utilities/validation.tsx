import * as yup from 'yup';

export const signUp = {
  name: '',
  email: '',
  password: '',
  phone: '',
  confirmPassword: '',
};

export const login = {
  email: '',
  password: '',
};

export const recover = {
  phone: '',
};

export const OTP = {
  otp: '',
};

export const signupVS = yup.object().shape({
  name: yup.string().required('Please, provide your name!'),
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password Required'),
  phone: yup
    .number()
    .typeError('Invalid contact number')
    .required('Contact Number Required'),
  confirmPassword: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password Required'),
});

export const loginVS = yup.object().shape({
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password Required'),
});

export const recoverVS = yup.object().shape({
  phone: yup
    .number()
    .typeError('Invalid contact number')
    .required('Contact Number Required'),
});

export const OTPVS = yup.object().shape({
  otp: yup.number().typeError('Invalid OTP number').required('OTP Required'),
});
