import { createContext, useContext } from 'react';

type DialogContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const DialogContext = createContext<DialogContextType | null>(null);

export const useDialogContext = () => {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error('useDialogContext must be used within a DialogProvider');
  }
  return context;
};
