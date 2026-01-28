import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "@/schemas/auth/loginSchema";

export const useLoginForm = () => {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log("Login submitted:", data);
    // Add API integration here
  };

  return {
    ...form,
    onSubmit: form.handleSubmit(onSubmit),
  };
};
