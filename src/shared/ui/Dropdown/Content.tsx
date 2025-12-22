import { useDropdownContext } from "./DropdownContext";

const Content = ({ children }: { children: React.ReactNode }) => {
  const { open } = useDropdownContext();

  if (!open) return null;

  return (
    <div className="absolute top-full right-0 z-50 mt-2 min-w-[120px] rounded-lg bg-white p-2 shadow-lg">
      {children}
    </div>
  );
};

export default Content;
