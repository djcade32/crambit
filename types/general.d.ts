export interface Question {
  id: string;
  question: string;
  answer: string;
  topics: string[];
}

export interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  height?: string;
  width?: string;
  maxWidth?: string;
  maxHeight?: string;
  children?: React.ReactNode;
  actionButtons?: ModalActionButtons;
  onClose?: () => void;
}

export interface ModalActionButtons {
  confirm?: {
    label?: string;
    onClick: () => void | Promise<void>;
  };
  cancel?: {
    label?: string;
    onClick: () => void | Promise<void>;
    variant?: "primary" | "danger";
  };
}
