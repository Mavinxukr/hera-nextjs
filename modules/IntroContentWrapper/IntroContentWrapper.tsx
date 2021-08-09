import { IntroContentWrapperProps } from "./IntroContentWrapper.props";
import styles from "./IntroContentWrapper.module.css";

export const IntroContentWrapper = ({
  children,
}: IntroContentWrapperProps): JSX.Element => {
  return (
    <div id="about" className={styles.wrapper}>
      {children}
    </div>
  );
};
