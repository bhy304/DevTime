interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

function Input({ placeholder, ...props }: InputProps) {
  return (
    <input
      {...props}
      placeholder={placeholder}
      className="w-full rounded bg-gray-50 px-4 py-3 text-gray-800 placeholder-gray-300 focus:placeholder-transparent focus:outline-none"
    />
  );
}

export default Input;
