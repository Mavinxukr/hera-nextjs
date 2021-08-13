import React from "react";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import { Logo } from "../../components/Logo/Logo";
import { Menu } from "../Menu/Menu";
import { ContainerFluid } from "../ContainerFluid/ContainerFluid";

export const Header = ({ background }: HeaderProps): JSX.Element => {
  return (
    <ContainerFluid>
      <header className={styles.header}>
        {background && (
          <div
            style={{ backgroundImage: `url(${background})` }}
            className={styles.gradient}
          ></div>
        )}
        <Logo />
        <Menu
          color={background ? "light" : "dark"}
          list={[
            { _id: 1, name: "about", href: "/#about" },
            { _id: 2, name: "subscribe", href: "/#subscribe" },
            { _id: 3, name: "blog", href: "/blog" },
          ]}
        />
      </header>
    </ContainerFluid>
  );
};
