"use client"

import { register } from '@/lib/auth-util';
import { registerSchema } from './validations';

import GenericForm from './GenericForm';

const RegisterForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const fields = [
    { name: 'firstName', type: 'text', label: 'Firstname', placeholder: 'John' },
    { name: 'lastName', type: 'text', label: 'Lastname', placeholder: 'Doe' },
    { name: 'email', type: 'email', label: 'Email', placeholder: 'johndow@example.com' },
    { name: 'password', type: 'password', label: 'Password', placeholder: 'Password' },
  ];

  const handleSubmit = async (userData: any) => {
    try {
        await register(userData)
    } catch (error) {
        console.log(error);
        
    }
  };

  return (
    <GenericForm
      initialValues={initialValues}
      validationSchema={registerSchema}
      fields={fields}
      onSubmit={handleSubmit}
      buttonLabel="Registrarse"
    />
  );
};

export default RegisterForm;