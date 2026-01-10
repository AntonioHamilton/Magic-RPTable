export type ButtonVariant = "primary" | "secondary" | "magic";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}
