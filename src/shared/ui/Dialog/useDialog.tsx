import { useState } from "react";

type DialogState = {
  title: React.ReactNode;
  content?: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};

const useDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogState] = useState<DialogState | null>(null);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const confirm = () => {
    dialogState?.onConfirm?.();
    close();
  };

  return { isOpen, dialogState, open, close, confirm };
};

export default useDialog;
