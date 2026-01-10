import styled from "styled-components";
import { theme } from "@styles/theme";
import type { ToastType } from "./types";

const getToastColor = (type: ToastType) => {
  switch (type) {
    case "success":
      return theme.colors.status.success;
    case "error":
      return theme.colors.status.error;
    case "warning":
      return theme.colors.status.warning;
    case "info":
      return theme.colors.status.info;
    default:
      return theme.colors.status.info;
  }
};

export const ToastWrapper = styled.div`
  position: fixed;
  top: ${theme.spacing[4]};
  right: ${theme.spacing[4]};
  z-index: 2000;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[2]};
  max-width: 400px;
`;

export const ToastItem = styled.div<{ $type: ToastType }>`
  background-color: ${theme.colors.background.elevated};
  border-left: 4px solid ${({ $type }) => getToastColor($type)};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing[4]};
  box-shadow: ${theme.colors.shadow.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing[4]};
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const ToastMessage = styled.div`
  color: ${theme.colors.text.primary};
  font-size: ${theme.fontSize.sm};
  flex: 1;
`;

export const ToastCloseButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.text.secondary};
  cursor: pointer;
  padding: ${theme.spacing[1]};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.borderRadius.sm};
  transition:
    color ${theme.transition.normal} ${theme.transition.easing["in-out"]},
    background-color ${theme.transition.normal}
      ${theme.transition.easing["in-out"]};

  &:hover {
    background-color: ${theme.colors.background.hover};
    color: ${theme.colors.text.primary};
  }
`;
