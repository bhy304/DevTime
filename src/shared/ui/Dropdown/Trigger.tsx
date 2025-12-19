import { useDropdownContext } from "./DropdownContext";

const Trigger = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const { open, onOpenChange } = useDropdownContext();
  return (
    <button onClick={() => onOpenChange(!open)} className={className}>
      {children}
    </button>
  );
};

export default Trigger;
