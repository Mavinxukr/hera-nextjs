import styles from "./MenuItem.module.css";
import { MenuItemProps } from "./MenuItem.props";
import cn from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";

export const MenuItem = ({ name, href, t }: MenuItemProps): JSX.Element => {
  const router = useRouter();
  return (
    <li className={styles["menu-item"]}>
      <Link href={href}>
        <a
          className={cn(styles["menu-link"], {
            [styles.dark]: t === "dark",
            [styles.light]: t === "light",
            [styles.active]: router.route.startsWith(href),
          })}
        >
          {name}
        </a>
      </Link>
    </li>
  );
};
