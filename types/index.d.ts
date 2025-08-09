interface Question {
  id: string;
  question: string;
  answer: string;
  tags: string[];
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
