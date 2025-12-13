import Button from '@/components/common/Button';
import { useDialogContext } from './DialogContext';

const Trigger = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, setIsOpen } = useDialogContext();

  return (
    <Button onClick={() => setIsOpen(!isOpen)} priority="primary">
      {children}
    </Button>
  );
};

export default Trigger;
