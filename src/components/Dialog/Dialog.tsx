import { useState } from 'react';
import { DialogContext } from './DialogContext';
import Trigger from './Trigger';
import Content from './Content';
import Title from './Title';
import Description from './Description';
import Footer from './Footer';

interface DialogProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const Dialog = ({ children, open, onOpenChange }: DialogProps) => {
  const [internalOpen, setInternalOpen] = useState(false);

  const isOpen = open ?? internalOpen;
  const setIsOpen = onOpenChange ?? setInternalOpen;

  return <DialogContext.Provider value={{ isOpen, setIsOpen }}>{children}</DialogContext.Provider>;
};

Dialog.Trigger = Trigger;
Dialog.Content = Content;
Dialog.Title = Title;
Dialog.Description = Description;
Dialog.Footer = Footer;

export default Dialog;
