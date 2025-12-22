import cn from "@/shared/lib/cn";
import { cva } from "class-variance-authority";
import { useTextFieldContext } from "./TextFieldContext";
import { forwardRef } from "react";

const inputVariants = cva(
  "flex-1 rounded bg-gray-50 px-4 py-3 text-gray-800 placeholder-gray-300 focus:placeholder-transparent focus:outline-none",
  {
    variants: {
      status: {
        default: "border-0",
        error: "border-negative border",
      },
    },
    defaultVariants: {
      status: "default",
    },
  },
);

const Input = forwardRef<HTMLInputElement, React.ComponentProps<"input"> & { className?: string }>(
  ({ className, ...props }, ref) => {
    const { id, placeholder, error } = useTextFieldContext();

    return (
      <input
        ref={ref}
        id={id}
        name={id}
        placeholder={placeholder}
        {...props}
        className={cn(inputVariants({ status: error === "validation" ? "error" : "default" }), className)}
      />
    );
  },
);

export default Input;
