import React from "react";
import AuthLayout from "@/layouts/AuthLayout";
import SignupForm from "@/components/auth/SignupForm";

const SignupPage: React.FC = () => {
  return (
    <AuthLayout
      title="Create an Account"
      description="Fill the form below to create an account"
    >
      <SignupForm />
    </AuthLayout>
  );
};

export default SignupPage;
