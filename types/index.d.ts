interface Question {
  id: string;
  question: string;
  answer: string;
  tags: string[];
}

interface Guide {
  id: string;
  title: string;
  questionsCount: number;
  lastUpdated: Date;
}

interface User {
  name: string;
  email: string;
  id: string;
}

interface SignInParams {
  email: string;
  idToken: string;
}

interface SignUpParams {
  uid: string;
  name: string;
  email: string;
  password: string;
}

interface RouteParams {
  params: Promise<Record<string, string>>;
  searchParams: Promise<Record<string, string>>;
}

interface SidebarItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

type FormType = "sign-in" | "sign-up";

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
