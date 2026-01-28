import React from "react";
import { Card, CardBody, Divider } from "@heroui/react";
import { Link } from "@heroui/link";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  description,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-[400px] p-6 space-y-5 shadow-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-500 text-sm mt-1">{description}</p>
        </div>

        {children}

        <Divider />

        <CardBody className="text-center text-sm text-gray-500 p-0">
          <p>
            By continuing, you agree to our{" "}
            <Link color="warning" size="sm" href="#">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link color="warning" size="sm" href="#">
              Privacy Policy
            </Link>
            .
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default AuthLayout;
