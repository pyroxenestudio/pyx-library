import clsx from "clsx";
import { styleTheme } from "../../../theme";

const buttonStyle = {
  success: 'success-interactive',
  danger: 'danger-interactive',
  warning: 'warning-interactive',
  info: 'info-interactive'
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonStyle
  padding?: keyof typeof styleTheme.padding;
  radius?: keyof typeof styleTheme.border.radius;
}

export function PyxButton({
  children,
  variant,
  radius,
  padding = 'normal',
  ...rest}: ButtonProps) {

  // New Way
  rest.className = clsx(
    styleTheme.padding[padding],
    radius && styleTheme.border.radius[radius],
    variant && buttonStyle[variant],
    rest.className
  );

  return <button {...rest}>{children}</button>
}