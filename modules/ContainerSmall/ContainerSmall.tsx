import { ContainerSmallProps } from "./ContainerSmall.props";
import styles from "./ContainerSmall.module.css";

export const ContainerSmall = ({
  children,
}: ContainerSmallProps): JSX.Element => {
  return <div className={styles.container}>{children}</div>;
};
