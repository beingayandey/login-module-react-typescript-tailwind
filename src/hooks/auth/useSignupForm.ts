import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, SignupFormData } from "@/schemas/auth/signupSchema";

export const useSignupForm = () => {
  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: SignupFormData) => {
    console.log("Signup submitted:", data);
    // Add API integration here
  };

  return {
    ...form,
    onSubmit: form.handleSubmit(onSubmit),
  };
};
