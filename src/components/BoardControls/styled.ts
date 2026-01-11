import styled from "styled-components";
import { theme } from "@styles/theme";

export const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]};
  padding: ${theme.spacing[4]};
  background-color: ${theme.colors.background.elevated};
  border-radius: ${theme.borderRadius.lg};
  border: 1px solid ${theme.colors.border.primary};
`;

export const ControlGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[2]};
`;

export const ControlLabel = styled.label`
  font-size: ${theme.fontSize.sm};
  font-weight: ${theme.fontWeight.medium};
  color: ${theme.colors.text.secondary};
`;

export const ControlRow = styled.div`
  display: flex;
  gap: ${theme.spacing[2]};
  align-items: center;
`;

export const WarningText = styled.p`
  font-size: ${theme.fontSize.xs};
  color: ${theme.colors.status.warning};
  margin: 0;
`;

export const ErrorText = styled.p`
  font-size: ${theme.fontSize.sm};
  color: ${theme.colors.status.error};
  margin: 0;
  font-weight: ${theme.fontWeight.medium};
`;

export const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.text.secondary};
  cursor: help;
`;
