import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import AppleIcon from "./apple.svg";
import cn from "classnames";

export const Button = ({
  appearance,
  children,
  className,
  href,
  target,
  ...props
}: ButtonProps): JSX.Element =>
  href ? (
    <a target={target} href={href}>
      <button
        className={cn(
          {
            [styles.primary]: appearance === "primary",
            [styles.social]: appearance === "social",
          },
          styles.button,
          className
        )}
        {...props}
      >
        {appearance === "social" ? <AppleIcon /> : null}
        {children}
      </button>
    </a>
  ) : (
    <button
      className={cn(
        {
          [styles.primary]: appearance === "primary",
          [styles.social]: appearance === "social",
        },
        styles.button,
        className
      )}
      {...props}
    >
      {appearance === "social" ? <AppleIcon /> : null}
      {children}
    </button>
  );
