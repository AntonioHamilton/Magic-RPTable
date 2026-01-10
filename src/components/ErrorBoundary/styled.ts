import styled from "styled-components";
import { theme } from "@styles/theme";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: ${theme.spacing[6]};
  text-align: center;
`;

export const ErrorTitle = styled.h1`
  font-size: ${theme.fontSize["4xl"]};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing[4]};
`;

export const ErrorMessage = styled.p`
  font-size: ${theme.fontSize.lg};
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing[6]};
`;

export const RetryButton = styled.button`
  background-color: ${theme.colors.blue[500]};
  color: ${theme.colors.text.primary};
  border: none;
  padding: ${theme.spacing[3]} ${theme.spacing[6]};
  border-radius: ${theme.borderRadius.md};
  font-weight: ${theme.fontWeight.medium};
  cursor: pointer;
  transition: background-color ${theme.transition.normal}
    ${theme.transition.easing["in-out"]};

  &:hover {
    background-color: ${theme.colors.blue[400]};
  }
`;
