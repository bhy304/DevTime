import cn from "@/shared/lib/cn";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}
const Title = ({ children, className }: TitleProps) => {
  return <h1 className={cn("text-title font-semibold text-gray-800", className)}>{children}</h1>;
};

export default Title;
