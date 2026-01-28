import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  forgotPasswordSchema,
  ForgotPasswordFormData,
} from "@/schemas/auth/forgotPasswordSchema";

export const useForgotPasswordForm = () => {
  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    console.log("Forgot password submitted:", data);
    // Add API integration here
  };

  return {
    ...form,
    onSubmit: form.handleSubmit(onSubmit),
  };
};
