import clsx from "clsx";
import styles from "./button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export default function Button({
  children,
  leftIcon,
  rightIcon,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled}
      className={clsx(
        styles.fancyButton,
        "flex items-center justify-center gap-2",
        className
      )}
    >
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}

      <span>{children}</span>

      {rightIcon && (
        <span className={clsx(styles.icon, styles.iconRight)}>{rightIcon}</span>
      )}
    </button>
  );
}
