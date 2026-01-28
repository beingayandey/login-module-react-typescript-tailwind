import React from "react";
import AuthLayout from "@/layouts/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <AuthLayout
      title="Welcome Back"
      description="Enter your credentials to access your account"
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
