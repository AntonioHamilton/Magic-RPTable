import styled from "styled-components";
import { theme } from "@styles/theme";

export const ModalOverlay = styled.div`
  background-color: rgba(6, 14, 38, 0.8);
  backdrop-filter: blur(4px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: ${theme.colors.background.elevated};
  border: 1px solid ${theme.colors.border.accent};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing[6]};
  box-shadow: ${theme.colors.shadow.xl};
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing[4]};
`;

export const ModalTitle = styled.h2`
  font-size: ${theme.fontSize["2xl"]};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin: 0;
`;

export const ModalCloseButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.text.secondary};
  cursor: pointer;
  padding: ${theme.spacing[2]};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.borderRadius.md};
  transition:
    background-color ${theme.transition.normal}
      ${theme.transition.easing["in-out"]},
    color ${theme.transition.normal} ${theme.transition.easing["in-out"]};

  &:hover {
    background-color: ${theme.colors.background.hover};
    color: ${theme.colors.text.primary};
  }
`;

export const ModalBody = styled.div`
  color: ${theme.colors.text.secondary};
`;
