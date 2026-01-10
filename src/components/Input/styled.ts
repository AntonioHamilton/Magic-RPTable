import styled from "styled-components";
import { theme } from "@styles/theme";

export const InputContainer = styled.input`
  background-color: ${theme.colors.background.tertiary};
  color: ${theme.colors.text.primary};
  border: 1px solid ${theme.colors.border.primary};
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSize.base};
  transition:
    color ${theme.transition.normal} ${theme.transition.easing["in-out"]},
    background-color ${theme.transition.normal}
      ${theme.transition.easing["in-out"]},
    border-color ${theme.transition.normal} ${theme.transition.easing["in-out"]};
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${theme.colors.border.focus};
    box-shadow: 0 0 0 3px rgba(58, 55, 166, 0.1);
  }

  &:disabled {
    background-color: ${theme.colors.background.secondary};
    color: ${theme.colors.text.disabled};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${theme.colors.text.tertiary};
  }
`;
