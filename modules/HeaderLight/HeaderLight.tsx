import React from "react";
import { Container } from "../Container/Container";
import { Logo } from "../../components/Logo/Logo";
import { Button } from "../../components/Button/Button";

import styles from "./HeaderLight.module.css";

export const HeaderLight = (): JSX.Element => {
  return (
    <Container>
      <header className={styles["light-header"]}>
        <div className={styles["light-header__wrapper"]}>
          <div className={styles["light-header__logo"]}>
            <Logo />
          </div>
          <div className={styles["light-header__buttons"]}>
            <Button
              target="_blank"
              href="https://apps.apple.com/ua/app/hera-pregnancy-motherhood/id1574922050"
              appearance="social"
              icon="apple"
            >
              App Store
            </Button>
          </div>
        </div>
      </header>
    </Container>
  );
};
