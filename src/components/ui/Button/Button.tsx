import clsx from "clsx";
import styles from "./button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
}

export default function Button({
  children,
  leftIcon,
  rightIcon,
  className,
  disabled,
  href,
  ...props
}: ButtonProps) {
  const classes = clsx(
    styles.fancyButton,
    "flex items-center justify-center gap-2",
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && (
          <span className={clsx(styles.icon, styles.iconRight)}>
            {rightIcon}
          </span>
        )}
      </a>
    );
  }

  return (
    <button {...props} disabled={disabled} className={classes}>
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && (
        <span className={clsx(styles.icon, styles.iconRight)}>{rightIcon}</span>
      )}
    </button>
  );
}
