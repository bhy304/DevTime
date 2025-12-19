import Eclipse from "@/shared/assets/ellipse.svg?react";

const Separator = () => {
  return (
    <div className="flex flex-col gap-16" aria-hidden="true">
      <Eclipse />
      <Eclipse />
    </div>
  );
};

export default Separator;
