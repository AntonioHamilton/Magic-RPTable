import { forwardRef } from "react";
import * as SC from "./styled";
import type { InputProps } from "./types";

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <SC.InputContainer ref={ref} {...props} />;
});

Input.displayName = "Input";
