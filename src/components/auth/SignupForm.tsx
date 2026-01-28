import React, { useState } from "react";
import { Input, Button, Divider, Link } from "@heroui/react";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { useSignupForm } from "@/hooks/auth/useSignupForm";

const SignupForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    onSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useSignupForm();

  return (
    <div className="space-y-5">
      <form onSubmit={onSubmit} className="space-y-4">
        <Input
          {...register("username")}
          // label="Username"
          placeholder="Choose a username"
          variant="bordered"
          isInvalid={!!errors.username}
          errorMessage={errors.username?.message}
        />

        <Input
          {...register("email")}
          type="email"
          // label="Email"
          placeholder="Enter your email"
          variant="bordered"
          isInvalid={!!errors.email}
          errorMessage={errors.email?.message}
        />

        <Input
          {...register("password")}
          type={showPassword ? "text" : "password"}
          // label="Password"
          placeholder="Create a password"
          variant="bordered"
          isInvalid={!!errors.password}
          errorMessage={errors.password?.message}
          endContent={
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          }
        />

        <Input
          {...register("confirmPassword")}
          type={showConfirmPassword ? "text" : "password"}
          // label="Confirm Password"
          placeholder="Re-enter password"
          variant="bordered"
          isInvalid={!!errors.confirmPassword}
          errorMessage={errors.confirmPassword?.message}
          endContent={
            <button
              type="button"
              onClick={() => setShowConfirmPassword((v) => !v)}
              className="text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          }
        />

        <Button
          type="submit"
          color="primary"
          className="w-full font-semibold"
          isDisabled={!isValid || isSubmitting}
          isLoading={isSubmitting}
        >
          {isSubmitting ? "Creating account..." : "Sign Up"}
          {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
        </Button>
      </form>

      <div className="flex items-center gap-3">
        <Divider className="flex-1" />
        <span className="text-[10px] text-gray-400 whitespace-nowrap">
          {" "}
          OR{" "}
        </span>
        <Divider className="flex-1" />
      </div>

      <div className="text-center text-sm">
        <span className="text-gray-500">Already have an account? </span>
        <Link href="/login" size="sm" color="primary" className="font-semibold">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default SignupForm;
