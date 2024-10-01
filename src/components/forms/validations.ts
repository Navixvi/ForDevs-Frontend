import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  firstName: Yup.string().required("El nombre es obligatorio"),
  lastName: Yup.string().required("El apellido es obligatorio"),
  email: Yup.string()
    .email("Debe ser un email válido")
    .required("El email es obligatorio"),
  password: Yup.string()
    .required("La contraseña es obligatoria")
    .min(8, "Debe tener al menos 8 caracteres"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Debe ser un email válido")
    .required("El email es obligatorio"),
  password: Yup.string().required("La contraseña es obligatoria"),
});
