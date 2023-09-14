import { FC } from "react";

interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  // Custom properties
  disabled?: boolean;
  primary?: boolean;
  size?: 'large' | 'small';
}
const Button: FC<ButtonProps> = ({ children, primary, ...props }) => {
  return <button {...props} className={primary ? 'btn-primary': 'btn-secondary'}>{children}</button>;
};

export default Button;
