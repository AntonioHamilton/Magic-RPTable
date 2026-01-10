import { useEffect } from "react";
import * as SC from "./styled";
import type { ModalProps } from "./types";

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <SC.ModalOverlay onClick={handleOverlayClick}>
      <SC.ModalContent>
        {title && (
          <SC.ModalHeader>
            <SC.ModalTitle>{title}</SC.ModalTitle>
            <SC.ModalCloseButton onClick={onClose} aria-label="Fechar modal">
              ✕
            </SC.ModalCloseButton>
          </SC.ModalHeader>
        )}
        <SC.ModalBody>{children}</SC.ModalBody>
      </SC.ModalContent>
    </SC.ModalOverlay>
  );
};
