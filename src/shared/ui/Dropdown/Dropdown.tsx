import { DropdownContext } from "./DropdownContext";
import { useDropdown } from "./useDropdown";
import Trigger from "./Trigger";
import Item from "./Item";
import Content from "./Content";
import Portal from "./Portal";
import Separator from "./Separator";

const Dropdown = ({ children }: { children: React.ReactNode }) => {
  const { open, onOpenChange } = useDropdown();

  return <DropdownContext.Provider value={{ open, onOpenChange }}>{children}</DropdownContext.Provider>;
};

Dropdown.Trigger = Trigger;
Dropdown.Portal = Portal;
Dropdown.Content = Content;
Dropdown.Item = Item;
Dropdown.Separator = Separator;

export default Dropdown;
