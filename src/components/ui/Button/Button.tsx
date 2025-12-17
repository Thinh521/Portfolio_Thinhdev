import clsx from "clsx";
import styles from "./button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button {...props} className={clsx(styles.fancyButton, className)}>
      {children}
    </button>
  );
}
