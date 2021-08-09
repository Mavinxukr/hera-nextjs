import { ContainerFluidProps } from "./ContainerFluid.props";
import styles from "./ContainerFluid.module.css";

export const ContainerFluid = ({
  children,
}: ContainerFluidProps): JSX.Element => {
  return <div className={styles["container-fluid"]}>{children}</div>;
};
