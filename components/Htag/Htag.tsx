import { HtagProps } from "./Htag.props";
import styles from "./Htag.module.css";
import cn from "classnames";

export const Htag = ({
  tag,
  children,
  align = "left",
  className,
}: HtagProps): JSX.Element => {
  switch (tag) {
    case "h1":
      return (
        <h1 className={cn(styles.h1, styles[align], className)}>{children}</h1>
      );
    case "h2":
      return (
        <h2 className={cn(styles.h2, styles[align], className)}>{children}</h2>
      );
    case "h3":
      return (
        <h3 className={cn(styles.h3, styles[align], className)}>{children}</h3>
      );
    case "h4":
      return <h4 className={cn(styles[align], className)}>{children}</h4>;
    case "h5":
      return <h5 className={cn(styles[align], className)}>{children}</h5>;
    case "h6":
      return <h6 className={cn(styles[align], className)}>{children}</h6>;
    case "intro":
      return (
        <h1 className={cn(styles.intro, styles[align], className)}>
          {children}
        </h1>
      );
    case "subtitle":
      return (
        <h4 className={cn(styles.subtitle, styles[align], className)}>
          {children}
        </h4>
      );
    default:
      return <></>;
  }
};
