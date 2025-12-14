import { useId } from 'react';
import CheckmarkIcon from '@/shared/assets/checkmark.svg?react';
import { type FieldError } from 'react-hook-form';
import cn from '@/shared/lib/cn';

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
        className={`text-bodysmall text-primary/30 peer-checked:text-primary cursor-pointer font-medium`}
      >
        {label}
      </label>

      <div className="group relative">
        <input {...props} type="checkbox" id={checkboxId} name={name || checkboxId} className="peer sr-only" />

        <label
          htmlFor={checkboxId}
          className={cn(
            'relative flex h-4 w-4 cursor-pointer items-center justify-center rounded border-2 transition-all',
            'peer-focus-visible:shadow-[0_0_0_2px_rgba(76,121,255,0.2)]',
            'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
            '[&_svg]:opacity-0 [&_svg]:transition-opacity peer-checked:[&_svg]:opacity-100',
            errors
              ? 'border-negative peer-hover:border-negative'
              : 'border-primary peer-hover:border-primary-light peer-checked:border-primary peer-checked:bg-blue-50',
          )}
        >
          <CheckmarkIcon className="h-3 w-3" />
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
