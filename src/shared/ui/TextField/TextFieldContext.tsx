import { createContext, useContext } from 'react';

export type TextFieldErrorType = 'validation' | 'unverified';

type TextFieldContextType = {
  id?: string;
  placeholder?: string;
  error?: TextFieldErrorType;
};

export const TextFieldContext = createContext<TextFieldContextType | null>(null);

export const useTextFieldContext = () => {
  const context = useContext(TextFieldContext);
  if (!context) {
    throw new Error('useTextFieldContext must be used within a TextFieldContextProvider');
  }
  return context;
};
