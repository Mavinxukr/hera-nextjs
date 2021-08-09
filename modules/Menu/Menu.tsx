import styles from "./Menu.module.css";
import { MenuItem } from "./MenuItem/MenuItem";
import { MenuProps } from "./Menu.props";

export const Menu = ({ list }: MenuProps): JSX.Element => {
  return (
    <nav className={styles.menu}>
      <ul className={styles["menu-list"]}>
        {list.map((item) => (
          <MenuItem key={item._id} {...item} />
        ))}
      </ul>
    </nav>
  );
};
