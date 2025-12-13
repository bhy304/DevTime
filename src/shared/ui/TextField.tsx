import Input from './Input';
import type { FieldError } from 'react-hook-form';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  button?: React.ReactNode;
  helperText?: string;
  errors?: FieldError;
}

const TextField = ({ id, label, button, helperText, errors, ...props }: TextFieldProps) => {
  return (
    <fieldset className="mb-6 flex flex-col gap-2 border-0 p-0">
      <label htmlFor={id} className="text-bodysmall font-medium text-gray-600">
        {label}
      </label>
      {button ? (
        <div className="flex gap-3">
          <Input id={id} error={!!errors} {...props} />
          {button}
        </div>
      ) : (
        <Input id={id} error={!!errors} {...props} />
      )}
      {errors && <span className="text-caption text-negative">{errors.message}</span>}
      {helperText && <span className="text-caption text-positive">{helperText}</span>}
    </fieldset>
  );
};

export default TextField;
