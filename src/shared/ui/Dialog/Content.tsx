import { useDialogContext } from './DialogContext';

const Content = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = useDialogContext();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="max-w-[328px] rounded-xl bg-white p-6 shadow-xl" role="dialog" aria-modal="true">
        {children}
      </div>
    </div>
  );
};

export default Content;
