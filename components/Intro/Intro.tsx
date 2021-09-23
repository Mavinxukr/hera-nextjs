import { useContext, useEffect, useState } from 'react';
import Player from 'react-player';
import styles from "./Intro.module.css";
import { ModalContext, IModalContext } from '../../context/MadalContext'
import { ContainerFluid } from "../../modules/ContainerFluid/ContainerFluid";
import { Logo } from "../Logo/Logo";
import { Button } from "../Button/Button";
import { Menu } from "../../modules/Menu/Menu";
import { Htag } from "../Htag/Htag";
import { Paragraph } from "../Paragraph/Paragraph";

import PlayIcon from '../../public/svg/play.svg';

export const Intro = (): JSX.Element => {
  const controller = useContext<IModalContext>(ModalContext);
  const openModal = () => {
    controller.setContent(
      <Player
        width="80vw"
        height="60vh"
        controls
        className={styles.player}
        url="/video/intro_video.mp4" />
    )
    controller.open()
  }

  return (
    <ContainerFluid>
      <header className={styles.hidden}>
        <div className={styles.video}>
          <video className={styles.video_media} src="/video/intro.mp4" autoPlay muted loop>
          </video>
          <div className={styles.video_content}>
            <div className={styles["intro__logo"]}>
              <Logo />
            </div>
            <Menu
              list={[
                { _id: 1, name: "about", href: "#about" },
                { _id: 2, name: "subscribe", href: "#subscribe" },
                { _id: 3, name: "blog", href: "/blog" },
              ]}
            />
            <button onClick={openModal} className={styles.buttonPlay}>
              <span></span>
              <PlayIcon />
            </button>
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
          </div>
        </div>
      </header>
    </ContainerFluid>
  );
};
