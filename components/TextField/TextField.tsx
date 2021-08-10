import { forwardRef } from "react";
import { Error } from "../Error/Error";
import styles from "./TextField.module.css";
import { ITextField } from "./TextField.props";
import cn from "classnames";

const TextField = forwardRef<HTMLInputElement, ITextField>(
  (
    { label, error, message, className, disabled, maxLength, render, ...props },
    ref
  ) => {
    return (
      <div className={cn(styles.wrapper, className)}>
        {label && <label className={styles.label}>{label}</label>}
        <input
          className={cn(styles.input, {
            [styles.error]: !!error,
          })}
          disabled={disabled}
          ref={ref}
          maxLength={maxLength}
          {...props}
        />
        {render ? render() : null}
        {error && <Error>{message}</Error>}
      </div>
    );
  }
);

export default TextField;
