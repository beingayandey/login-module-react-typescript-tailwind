import React from "react";
import { Input, Button, Divider, Link } from "@heroui/react";
import { ArrowRight, Github, Globe } from "lucide-react";
import { useLoginForm } from "@/hooks/auth/useLoginForm";

const LoginForm: React.FC = () => {
  const {
    register,
    onSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useLoginForm();

  return (
    <div className="space-y-5">
      <form onSubmit={onSubmit} className="space-y-4">
        <Input
          {...register("email")}
          type="email"
          // label="Email"
          placeholder="Enter your email"
          variant="bordered"
          isInvalid={!!errors.email}
          errorMessage={errors.email?.message}
        />

        <div className="space-y-1">
          <Input
            {...register("password")}
            type="password"
            // label="Password"
            placeholder="Enter your password"
            variant="bordered"
            isInvalid={!!errors.password}
            errorMessage={errors.password?.message}
          />
          <div className="flex justify-end">
            <Link
              color="secondary"
              size="sm"
              href="/forgot-password"
              className="text-xs"
            >
              Forgot Password?
            </Link>
          </div>
        </div>

        <Button
          type="submit"
          color="primary"
          className="w-full font-semibold"
          isDisabled={!isValid || isSubmitting}
          isLoading={isSubmitting}
        >
          {isSubmitting ? "Signing in..." : "Sign In"}
          {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
        </Button>
      </form>

      <div className="flex items-center gap-3">
        <Divider className="flex-1" />
        <span className="text-[10px] text-gray-400 whitespace-nowrap">
          {" "}
          OR CONTINUE WITH{" "}
        </span>
        <Divider className="flex-1" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button variant="bordered" className="flex items-center gap-2">
          <Globe className="w-4 h-4" />
          Google
        </Button>
        <Button variant="bordered" className="flex items-center gap-2">
          <Github className="w-4 h-4" />
          GitHub
        </Button>
      </div>

      <div className="text-center text-sm">
        <span className="text-gray-500">Don't have an account? </span>
        <Link
          href="/signup"
          size="sm"
          color="primary"
          className="font-semibold"
        >
          Create one
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
