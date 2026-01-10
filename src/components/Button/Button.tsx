import { forwardRef } from "react";
import * as SC from "./styled";
import type { ButtonProps } from "./types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", children, ...props }, ref) => {
    return (
      <SC.ButtonContainer ref={ref} $variant={variant} {...props}>
        {children}
      </SC.ButtonContainer>
    );
  }
);

Button.displayName = "Button";
