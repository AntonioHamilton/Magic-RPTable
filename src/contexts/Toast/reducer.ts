import type { Toast, ToastAction } from "./types";

export const toastReducer = (state: Toast[], action: ToastAction): Toast[] => {
  switch (action.type) {
    case "ADD_TOAST":
      return [
        ...state,
        {
          ...action.payload,
          id: Date.now().toString() + Math.random().toString(36).substr(2, 9)
        }
      ];
    case "REMOVE_TOAST":
      return state.filter((toast) => toast.id !== action.payload);
    default:
      return state;
  }
};
