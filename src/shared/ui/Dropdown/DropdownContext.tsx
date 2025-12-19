import { createContext, useContext } from "react";
import type { useDropdown } from "./useDropdown";

type DropdownContextType = ReturnType<typeof useDropdown>;

export const DropdownContext = createContext<DropdownContextType | null>(null);

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error("useDropdownContext must be used within a DropdownContextProvider");
  }
  return context;
};
