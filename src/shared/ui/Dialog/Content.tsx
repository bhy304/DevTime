import { useDialogContext } from "./DialogContext";
import cn from "@/shared/lib/cn";

interface ContentProps {
  children: React.ReactNode;
  className?: string;
}

const Content = ({ children, className }: ContentProps) => {
  const { isOpen } = useDialogContext();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className={cn("max-w-[328px] rounded-xl bg-white p-6 shadow-xl", className)} role="dialog" aria-modal="true">
        {children}
      </div>
    </div>
  );
};

export default Content;
