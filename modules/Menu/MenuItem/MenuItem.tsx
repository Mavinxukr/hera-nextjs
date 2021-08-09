import styles from "./MenuItem.module.css";
import { MenuItemProps } from "./MenuItem.props";

export const MenuItem = ({ name, href }: MenuItemProps): JSX.Element => {
  return (
    <li className={styles["menu-item"]}>
      <a className={styles["menu-link"]} href={href}>
        {name}
      </a>
    </li>
  );
};
