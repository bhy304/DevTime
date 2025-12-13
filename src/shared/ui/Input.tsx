interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  error?: boolean;
}

function Input({ placeholder, error, ...props }: InputProps) {
  return (
    <input
      {...props}
      placeholder={placeholder}
      className={`flex-1 rounded bg-gray-50 px-4 py-3 text-gray-800 placeholder-gray-300 focus:placeholder-transparent focus:outline-none ${error && "border-negative border"}`}
    />
  );
}

export default Input;
