import { useState } from "react";

export const useDropdown = () => {
  const [open, setOpen] = useState(false);

  const onOpenChange = (open: boolean) => {
    setOpen(open);
  };

  return { open, onOpenChange };
};
