import { useTextFieldContext } from './TextFieldContext';

const Label = ({ children, ...props }: React.ComponentProps<'label'>) => {
  const { id } = useTextFieldContext();
  return (
    <label {...props} htmlFor={id} className="text-bodysmall font-medium text-gray-600">
      {children}
    </label>
  );
};

export default Label;
