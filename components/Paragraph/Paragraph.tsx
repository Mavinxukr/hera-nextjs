import { ParagraphProps } from "./Paragraph.props";
import cn from "classnames";
import styles from "./Paragraph.module.css";

export const Paragraph = ({
  align = "left",
  children,
  className,
}: ParagraphProps): JSX.Element => {
  return (
    <p tabIndex={0} className={cn(styles.paragraph, styles[align], className)}>
      {children}
    </p>
  );
};
