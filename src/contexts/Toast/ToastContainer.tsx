import { useEffect } from "react";
import { useToast } from "./ToastContext";
import * as SC from "./styled";

export const ToastContainer = () => {
  const { toasts, removeToast } = useToast();

  useEffect(() => {
    toasts.forEach((toast) => {
      if (toast.duration && toast.duration > 0) {
        const timer = setTimeout(() => {
          removeToast(toast.id);
        }, toast.duration);

        return () => clearTimeout(timer);
      }
    });
  }, [toasts, removeToast]);

  return (
    <SC.ToastWrapper>
      {toasts.map((toast) => (
        <SC.ToastItem key={toast.id} $type={toast.type}>
          <SC.ToastMessage>{toast.message}</SC.ToastMessage>
          <SC.ToastCloseButton
            onClick={() => removeToast(toast.id)}
            aria-label="Fechar"
          >
            ✕
          </SC.ToastCloseButton>
        </SC.ToastItem>
      ))}
    </SC.ToastWrapper>
  );
};
