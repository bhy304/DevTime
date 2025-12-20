import { TextFieldContext, type TextFieldErrorType } from "./TextFieldContext";
import cn from "@/shared/lib/cn";
import Label from "./Label";
import Button from "../Button/Button";
import Input from "./Input";
import HelperText from "./HelperText";

const TextField = ({
  id,
  placeholder,
  error,
  className,
  children,
}: {
  id?: string;
  placeholder?: string;
  error?: TextFieldErrorType;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <TextFieldContext.Provider value={{ id, placeholder, error }}>
      <fieldset className={cn("mb-6 flex flex-col gap-2 border-0 p-0", className)}>{children}</fieldset>
    </TextFieldContext.Provider>
  );
};

TextField.Label = Label;
TextField.Input = Input;
TextField.Button = Button;
TextField.HelperText = HelperText;

export default TextField;
