import cn from "@/shared/lib/cn";

interface FieldsetProps {
  children: React.ReactNode;
  className?: string;
}

const Fieldset = ({ children, className }: FieldsetProps) => {
  return <fieldset className={cn("mb-6 flex flex-col gap-2 border-0 p-0", className)}>{children}</fieldset>;
};

export default Fieldset;
