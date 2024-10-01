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
    { name: 'firstName', type: 'text', label: 'Nombre', placeholder: 'Tu nombre' },
    { name: 'lastName', type: 'text', label: 'Apellido', placeholder: 'Tu apellido' },
    { name: 'email', type: 'email', label: 'Email', placeholder: 'Tu email' },
    { name: 'password', type: 'password', label: 'Contraseña', placeholder: 'Tu contraseña' },
  ];

  const handleSubmit = async (userData: any) => {
    try {
        console.log(userData, "askdhajshdjkashdjkahsdkjashdkjshdkjhasd");
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