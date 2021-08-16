import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";
import { format } from "date-fns";
import InstagramIcon from "../../public/svg/instagram.svg";
import FacebookIcon from "../../public/svg/facebook.svg";
import { Container } from "../Container/Container";
import Link from "next/link";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <Container>
        <div className={styles["footer__social"]}>
          <ul className={styles["footer__social__list"]}>
            <li className={styles["footer__social__item"]}>
              <a
                href="https://www.instagram.com/theheraapp/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={styles["footer__social__link"]}
              >
                <InstagramIcon />
              </a>
            </li>
            <li className={styles["footer__social__item"]}>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={styles["footer__social__link"]}
              >
                <FacebookIcon />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles["footer__end"]}>
          <div className={styles["footer__left"]}>
            <Link href="/terms">
              <a className={styles["footer__link"]}>Terms and conditions</a>
            </Link>
            <Link href="/privacy">
              <a className={styles["footer__link"]}>Privacy policy</a>
            </Link>
          </div>
          <div className={styles["footer__right"]}>
            (c) 2021 - {format(new Date(), "yyyy")}. Hera. All rights reserved
          </div>
        </div>
      </Container>
    </footer>
  );
};
