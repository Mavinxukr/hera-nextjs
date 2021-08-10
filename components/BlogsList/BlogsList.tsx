import { BlogsListProps } from "./BlogsList.props";
import styles from "./BlogsList.module.css";

export const BlogsList = ({ children }: BlogsListProps): JSX.Element => {
  return <ul className={styles.list}>{children}</ul>;
};
