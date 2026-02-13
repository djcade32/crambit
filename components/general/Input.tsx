import * as React from "react";
import { EyeOff, Eye } from "lucide-react";

interface Input {
  postIcon?: React.ReactNode;
  classNameAttr?: any;
  onChange: () => void;
  type?: React.HTMLInputTypeAttribute;
  value: string;
  placeHolder: string
}

export default function Input({ postIcon, classNameAttr, onChange, value, type="text", placeHolder }: Input) {

const [showPassword, setShowPassword] = React.useState(false);

const getPostIcon = () => {
  if(postIcon) return postIcon
  if(type === "password") {
    return showPassword ? <EyeOff onClick={togglePasswordVisibility}/> : <Eye onClick={togglePasswordVisibility} />
  }
}
const togglePasswordVisibility = () => {
  setShowPassword(!showPassword)
}

  return (
    <div className="flex items-center gap-2 w-full rounded-[5px] relative">
      <input
        type={showPassword ? "text" : type}
        placeholder={placeHolder}
        className={`border-2 border-(--neutral-gray) focus:border-(--accent) focus:bg-(--light-gray) outline-none rounded-[5px] h-10.5 p-3 hover:bg-(--neutral-gray)/60 duration-200 w-full ${classNameAttr}`}
      />
      <div className="absolute right-3">
      {getPostIcon()}
      </div>
    </div>
  );
}
