export type ToastType = "success" | "error" | "warning" | "info";

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

export type ToastAction =
  | { type: "ADD_TOAST"; payload: Omit<Toast, "id"> }
  | { type: "REMOVE_TOAST"; payload: string };
