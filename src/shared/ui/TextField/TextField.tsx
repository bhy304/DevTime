import { TextFieldContext, type TextFieldErrorType } from "./TextFieldContext";
import Fieldset from "./Fieldset";
import Label from "./Label";
import Button from "../Button/Button";
import Input from "./Input";
import HelperText from "./HelperText";

const TextField = ({
  id,
  placeholder,
  error,
  children,
}: {
  id?: string;
  placeholder?: string;
  error?: TextFieldErrorType;
  children: React.ReactNode;
}) => {
  return <TextFieldContext.Provider value={{ id, placeholder, error }}>{children}</TextFieldContext.Provider>;
};

TextField.Fieldset = Fieldset;
TextField.Label = Label;
TextField.Input = Input;
TextField.Button = Button;
TextField.HelperText = HelperText;

export default TextField;
