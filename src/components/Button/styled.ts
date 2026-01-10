import styled from "styled-components";
import { theme } from "@styles/theme";
import type { ButtonVariant } from "./types";

const getVariantStyles = (variant: ButtonVariant = "primary") => {
  switch (variant) {
    case "primary":
      return `
				background-color: ${theme.colors.blue[500]};
				color: ${theme.colors.text.primary};
				border: none;

				&:hover:not(:disabled) {
					background-color: ${theme.colors.blue[400]};
				}

				&:active:not(:disabled) {
					background-color: ${theme.colors.blue[600]};
				}

				&:disabled {
					background-color: ${theme.colors.background.tertiary};
					color: ${theme.colors.text.disabled};
					opacity: 0.6;
				}
			`;
    case "secondary":
      return `
				background-color: transparent;
				color: ${theme.colors.blue[500]};
				border: 1px solid ${theme.colors.border.primary};

				&:hover:not(:disabled) {
					background-color: ${theme.colors.background.hover};
					border-color: ${theme.colors.border.accent};
				}

				&:active:not(:disabled) {
					background-color: ${theme.colors.background.tertiary};
				}

				&:disabled {
					opacity: 0.5;
					border-color: ${theme.colors.border.secondary};
				}
			`;
    case "magic":
      return `
				background: linear-gradient(
					135deg,
					${theme.colors.purple[500]} 0%,
					${theme.colors.magenta[500]} 100%
				);
				color: ${theme.colors.text.primary};
				border: none;
				font-weight: ${theme.fontWeight.semibold};

				&:hover:not(:disabled) {
					opacity: 0.9;
				}

				&:active:not(:disabled) {
					opacity: 0.85;
				}

				&:disabled {
					opacity: 0.5;
				}
			`;
    default:
      return "";
  }
};

export const ButtonContainer = styled.button<{ $variant: ButtonVariant }>`
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  border-radius: ${theme.borderRadius.lg};
  font-weight: ${theme.fontWeight.semibold};
  font-size: ${theme.fontSize.sm};
  transition:
    background-color ${theme.transition.fast}
      ${theme.transition.easing["in-out"]},
    border-color ${theme.transition.fast} ${theme.transition.easing["in-out"]},
    opacity ${theme.transition.fast} ${theme.transition.easing["in-out"]};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing[2]};
  min-height: 36px;

  ${({ $variant }) => getVariantStyles($variant)}

  &:disabled {
    cursor: not-allowed;
  }
`;
