import { useId } from "react";
import CheckmarkIcon from "../../assets/checkmark.svg?react";
import { type FieldError } from "react-hook-form";
import cn from "@/utils/cn";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
  errors?: FieldError;
}

const Checkbox = ({ id, name, label, errors, ...props }: CheckboxProps) => {
  const generatedId = useId();
  const checkboxId = id || generatedId;

  return (
    <div className="inline-flex items-center gap-2 select-none">
      <label
        htmlFor={checkboxId}
        className={`text-bodysmall cursor-pointer font-medium text-gray-700 ${errors && "text-primary-default/30"}`}
      >
        {label}
      </label>

      <div className="group relative">
        <input
          {...props}
          type="checkbox"
          id={checkboxId}
          name={name || checkboxId}
          className="peer sr-only"
        />

        <label
          htmlFor={checkboxId}
          className={cn(
            "relative flex h-4 w-4 cursor-pointer items-center justify-center rounded border-2 transition-all",
            "peer-focus-visible:shadow-[0_0_0_2px_rgba(76,121,255,0.2)]",
            "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
            "[&_svg]:opacity-0 [&_svg]:transition-opacity peer-checked:[&_svg]:opacity-100",
            errors
              ? "border-secondary-negative peer-hover:border-secondary-negative"
              : "border-primary-default peer-hover:border-primary-light peer-checked:border-primary-default peer-checked:bg-blue-50",
          )}
        >
          <CheckmarkIcon className="h-3 w-3" />
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
