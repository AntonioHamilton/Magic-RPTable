import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useCallback
} from "react";
import { toastReducer } from "./reducer";
import type { Toast, ToastType } from "./types";

interface ToastContextType {
  toasts: Toast[];
  addToast: (message: string, type?: ToastType, duration?: number) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, dispatch] = useReducer(toastReducer, []);

  const addToast = useCallback(
    (message: string, type: ToastType = "info", duration: number = 5000) => {
      dispatch({ type: "ADD_TOAST", payload: { message, type, duration } });
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    dispatch({ type: "REMOVE_TOAST", payload: id });
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
};
