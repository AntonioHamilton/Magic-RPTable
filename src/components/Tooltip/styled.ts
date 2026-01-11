import styled from "styled-components";
import { theme } from "@styles/theme";

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const TooltipContent = styled.div<{
  $position: "top" | "bottom" | "left" | "right";
  $visible: boolean;
}>`
  position: absolute;
  z-index: 10000;
  padding: ${theme.spacing[2]} ${theme.spacing[3]};
  background-color: ${theme.colors.background.elevated};
  border: 1px solid ${theme.colors.border.accent};
  border-radius: ${theme.borderRadius.md};
  color: ${theme.colors.text.primary};
  font-size: ${theme.fontSize.sm};
  font-weight: ${theme.fontWeight.normal};
  white-space: nowrap;
  box-shadow: ${theme.colors.shadow.lg};
  pointer-events: none;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
  transition:
    opacity ${theme.transition.fast} ${theme.transition.easing["in-out"]},
    visibility ${theme.transition.fast} ${theme.transition.easing["in-out"]};

  ${({ $position }) => {
    switch ($position) {
      case "top":
        return `
					bottom: calc(100% + ${theme.spacing[2]});
					left: 50%;
					transform: translateX(-50%);
				`;
      case "bottom":
        return `
					top: calc(100% + ${theme.spacing[2]});
					left: 50%;
					transform: translateX(-50%);
				`;
      case "left":
        return `
					right: calc(100% + ${theme.spacing[2]});
					top: 50%;
					transform: translateY(-50%);
				`;
      case "right":
        return `
					left: calc(100% + ${theme.spacing[2]});
					top: 50%;
					transform: translateY(-50%);
				`;
      default:
        return "";
    }
  }}
`;
