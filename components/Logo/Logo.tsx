import LogoIcon from "./logo.svg";
import Link from "next/link";

export const Logo = (): JSX.Element => (
  <Link href="/">
    <a>
      <LogoIcon />
    </a>
  </Link>
);
