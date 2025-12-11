import type { Priority } from "@/types";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  priority?: Priority;
  size?: "large";
}

const Button = ({
  priority = "primary",
  size,
  children,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "text-subtitle font-medium rounded border-2 border-transparent transition-all duration-200 px-4 py-3";

  const priorityStyles = {
    primary:
      "bg-primary-default text-white hover:brightness-90 active:brightness-85 disabled:bg-gray-400 disabled:text-gray-300",
    secondary:
      "bg-blue-50 text-primary-default hover:brightness-95 active:brightness-90 disabled:bg-gray-200 disabled:text-gray-400",
    tertiary:
      "bg-gray-50 text-primary-default hover:brightness-95 active:brightness-90 disabled:bg-gray-200 disabled:text-gray-400",
  };

  const sizeStyles = size === "large" ? "w-full" : "";

  const focusStyles =
    "focus-visible:border-secondary-fuchsia focus-visible:outline-none";

  const disabledStyles = "disabled:cursor-not-allowed";

  const combinedClassName =
    `${baseStyles} ${priorityStyles[priority]} ${sizeStyles} ${focusStyles} ${disabledStyles} ${className || ""}`.trim();

  return (
    <button {...props} className={combinedClassName}>
      {children}
    </button>
  );
};

export default Button;
