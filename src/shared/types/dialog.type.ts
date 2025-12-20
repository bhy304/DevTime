export type DialogState = {
  isOpen: boolean;
  title: string;
  content?: string;
  onClose?: () => void;
};
