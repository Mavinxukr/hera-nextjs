import LogoIcon from "./logo.svg";
import Link from "next/link";
import styles from "./Logo.module.css";
import { LogoProps } from "./Logo.props";

export const Logo = ({ nolink = false }: LogoProps): JSX.Element =>
  nolink ? (
    <LogoIcon />
  ) : (
    <Link href="/">
      <a aria-label="Hera" className={styles.logo}>
        <LogoIcon />
      </a>
    </Link>
  );
