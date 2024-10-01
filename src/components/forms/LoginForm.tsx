"use client";

import { login } from "@/lib/auth-util";
import { useRouter } from "next/navigation";
import { loginSchema } from "./validations";
import { useAppDispatch } from "@/redux/store/hooks";
import { loginUser } from "@/redux/store/slices/user/userSlice";

import GenericForm from "./GenericForm";
import Link from "next/link";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const initialValues = {
    email: "",
    password: "",
  };

  const fields = [
    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "johndoe@example.com",
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "password",
    },
  ];

  const handleSubmit = async (userData: any) => {
    try {
      const loggedUser = await login(userData);
      if (loggedUser) {
        router.replace("/home");
        dispatch(loginUser());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <GenericForm
        initialValues={initialValues}
        validationSchema={loginSchema}
        fields={fields}
        onSubmit={handleSubmit}
        buttonLabel="Log In"
      />
      <Link href="/auth/forgot-password">Forgot password</Link>
    </>
  );
};

export default LoginForm;
