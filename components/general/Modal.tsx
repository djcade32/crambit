import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import Button from "./Button";
import { ModalProps } from "@/types/general";
import { cn } from "@/lib/utils";

const Modal = ({
  children,
  actionButtons,
  onClose,
  open,
  setOpen,
  height,
  width,
  maxHeight,
  maxWidth,
}: ModalProps) => {
  if (!children) {
    return null; // Don't render the modal if there are no children
  }

  useEffect(() => {
    console.log("Modal mounted with open state:", open);
  }, [open]);

  const showCancelButton = !!actionButtons?.cancel;
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    setOpen(false);
  };

  return (
    <div
      className={cn(
        "absolute top-0 left-0 right-0 bottom-0 backdrop-blur-[3px] bg-(--black)/20 flex justify-center items-center transition-all duration-200",
        open ? "opacity-100 z-50" : "opacity-0 z-[-1]"
      )}
    >
      <div className="bg-(--white) dark:bg-[#20252A] rounded-[5px] p-6 border-1 border-(--neutral-gray) shadow-lg w-[80vw] lg:w-[60vw] xl:w-[40vw]">
        <div className="flex justify-end">
          {!showCancelButton && (
            <X color="var(--dark-gray)" className="cursor-pointer" onClick={handleClose} />
          )}
        </div>
        {children}
        <div className="flex justify-end gap-4 mt-3">
          {showCancelButton && (
            <Button
              label={actionButtons?.cancel?.label || "Cancel"}
              onClick={() => console.log("confirm")}
              variant={actionButtons?.cancel?.variant || "danger"}
            />
          )}
          <Button
            label={actionButtons?.confirm?.label || "Confirm"}
            onClick={
              actionButtons?.confirm?.onClick || (() => console.log("Implement confirm action"))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
