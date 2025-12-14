import { useDialogContext } from './DialogContext';
import Button from '@/shared/ui/Button/Button';

const Trigger = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, setIsOpen } = useDialogContext();

  return (
    <Button onClick={() => setIsOpen(!isOpen)} priority="primary">
      {children}
    </Button>
  );
};

export default Trigger;
