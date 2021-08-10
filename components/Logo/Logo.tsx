import LogoIcon from "./logo.svg";
import Link from "next/link";
import styles from "./Logo.module.css";

export const Logo = (): JSX.Element => (
  <Link href="/">
    <a className={styles.logo}>
      <LogoIcon />
    </a>
  </Link>
);
