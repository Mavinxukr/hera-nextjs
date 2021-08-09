import styles from "./Intro.module.css";

import { ContainerFluid } from "../../modules/ContainerFluid/ContainerFluid";
import { Logo } from "../Logo/Logo";
import { Button } from "../Button/Button";
import { Menu } from "../../modules/Menu/Menu";
import { Htag } from "../Htag/Htag";
import { Paragraph } from "../Paragraph/Paragraph";

export const Intro = (): JSX.Element => {
  return (
    <ContainerFluid>
      <header className={styles.intro}>
        <div className={styles["intro__logo"]}>
          <Logo />
        </div>
        <Menu
          list={[
            { _id: 1, name: "about", href: "#about" },
            { _id: 2, name: "subscribe", href: "#subscribe" },
          ]}
        />
        <div className={styles["intro__description"]}>
          <Htag align="center" tag="intro">
            Nourish your mind, body and soul, throughout pregnancy and
            motherhood.
          </Htag>
        </div>
        <div className={styles["intro__store"]}>
          <Paragraph className={styles["intro__subtitle"]}>
            Coming soon...
          </Paragraph>
          <Button href="#" appearance="social" icon="apple">
            App Store
          </Button>
        </div>
      </header>
    </ContainerFluid>
  );
};
