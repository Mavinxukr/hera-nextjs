import styles from "./Menu.module.css";
import { MenuItem } from "./MenuItem/MenuItem";
import { MenuProps } from "./Menu.props";

export const Menu = ({ list, color = "light" }: MenuProps): JSX.Element => {
  return (
    <nav className={styles.menu}>
      <ul className={styles["menu-list"]}>
        {list.map((item) => (
          <MenuItem t={color} key={item._id} {...item} />
        ))}
      </ul>
    </nav>
  );
};
