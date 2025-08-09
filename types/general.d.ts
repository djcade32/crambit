export interface Question {
  id: string;
  question: string;
  answer: string;
  tags: string[];
}

export interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  question?: Question | null; // Optional, used for editing a question
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
  slotRight?: () => React.ReactNode;
  slotLeft?: () => React.ReactNode;
}
