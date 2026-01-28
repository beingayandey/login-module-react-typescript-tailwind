import React from "react";
import { Spinner } from "@heroui/react";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[50vh] w-full">
      <Spinner size="lg" color="primary" label="Loading..." />
    </div>
  );
};

export default Loader;
