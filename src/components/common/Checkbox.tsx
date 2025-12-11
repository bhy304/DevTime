import { useId, useState } from "react";
import { ReactComponent as CheckmarkIcon } from "../../assets/checkmark.svg";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
}

const Checkbox = ({ id, name, label, ...props }: CheckboxProps) => {
  const generatedId = useId();
  const checkboxId = id || generatedId;
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="inline-flex items-center gap-2 select-none">
      <input
        {...props}
        type="checkbox"
        id={checkboxId}
        name={name || checkboxId}
        onChange={(e) => {
          setIsChecked(e.target.checked);
          props.onChange?.(e);
        }}
        className="hidden"
      />
      <label
        htmlFor={checkboxId}
        className="border-primary-default hover:border-primary-light relative flex h-4 w-4 cursor-pointer items-center justify-center rounded border-2 transition-all focus-within:shadow-[0_0_0_2px_rgba(76,121,255,0.2)] disabled:cursor-not-allowed disabled:border-gray-400 disabled:opacity-50"
        style={{
          backgroundColor: isChecked ? "rgba(76, 121, 255, 0.1)" : "white",
        }}
      >
        {isChecked && (
          <CheckmarkIcon className="text-primary-default h-3 w-3" />
        )}
      </label>
      <label
        htmlFor={checkboxId}
        className="text-bodysmall cursor-pointer font-medium text-gray-700"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
