import { ErrorProps } from "./Error.props";
import cn from "classnames";
import styles from "./Error.module.css";

export const Error = ({
  align = "left",
  children,
}: ErrorProps): JSX.Element => {
  return <span className={cn(styles.error, styles[align])}>{children}</span>;
};
