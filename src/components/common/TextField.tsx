import Input from "./Input";
import type { FieldError } from "react-hook-form";

interface TextFieldProps {
  id: string;
  type: string;
  label: string;
  placeholder: string;
  button?: React.ReactNode;
  helperText?: string;
  errors?: FieldError;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

const TextField = ({
  id,
  type,
  label,
  placeholder,
  button,
  helperText,
  errors,
  onBlur,
  ...props
}: TextFieldProps) => {
  return (
    <fieldset className="mb-6 flex flex-col gap-2 border-0 p-0">
      <label htmlFor={id} className="text-bodysmall font-medium text-gray-600">
        {label}
      </label>
      {button ? (
        <div className="flex gap-3">
          <Input
            id={id}
            type={type}
            placeholder={placeholder}
            error={!!errors}
            onBlur={onBlur}
            {...props}
          />
          {button}
        </div>
      ) : (
        <Input id={id} type={type} placeholder={placeholder} {...props} />
      )}
      {errors && (
        <span className="text-caption text-secondary-negative">
          {errors.message}
        </span>
      )}
      {helperText && (
        <span className="text-caption text-secondary-positive">
          {helperText}
        </span>
      )}
    </fieldset>
  );
};

export default TextField;
