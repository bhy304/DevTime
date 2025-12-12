import cn from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "text-subtitle font-medium rounded border-2 border-transparent transition-all duration-200 px-4 py-3 cursor-pointer",
  {
    variants: {
      priority: {
        primary:
          "bg-primary-default text-white hover:brightness-90 active:brightness-85 disabled:bg-gray-400 disabled:text-gray-300",
        secondary:
          "bg-blue-50 text-primary-default hover:brightness-95 active:brightness-90 disabled:bg-gray-200 disabled:text-gray-400",
        tertiary:
          "bg-gray-50 text-primary-default hover:brightness-95 active:brightness-90 disabled:bg-gray-200 disabled:text-gray-400",
      },
      size: {
        large: "w-full",
      },
    },
  },
);

interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = ({
  priority = "primary",
  size,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ priority, size }), className)}
    >
      {children}
    </button>
  );
};

export default Button;
