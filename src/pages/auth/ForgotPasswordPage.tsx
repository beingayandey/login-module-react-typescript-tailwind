import React from "react";
import AuthLayout from "@/layouts/AuthLayout";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

const ForgotPasswordPage: React.FC = () => {
  return (
    <AuthLayout
      title="Forgot Password?"
      description="Enter your email address to reset your password"
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
