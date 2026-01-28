import React from "react";
import { Input, Button, Link } from "@heroui/react";
import { ArrowRight } from "lucide-react";
import { useForgotPasswordForm } from "@/hooks/auth/useForgotPasswordForm";

const ForgotPasswordForm: React.FC = () => {
  const {
    register,
    onSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForgotPasswordForm();

  return (
    <div className="space-y-5">
      <form onSubmit={onSubmit} className="space-y-4">
        <Input
          {...register("email")}
          type="email"
          // label="Email"
          placeholder="Enter your registered email"
          variant="bordered"
          isInvalid={!!errors.email}
          errorMessage={errors.email?.message}
        />

        <Button
          type="submit"
          color="primary"
          className="w-full font-semibold"
          isDisabled={!isValid || isSubmitting}
          isLoading={isSubmitting}
        >
          {isSubmitting ? "Sending request..." : "Send Reset Link"}
          {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
        </Button>
      </form>

      <div className="text-center text-sm">
        <span className="text-gray-500">Remember your password? </span>
        <Link href="/login" size="sm" color="primary" className="font-semibold">
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
