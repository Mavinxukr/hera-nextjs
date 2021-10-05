import { useContext, useEffect, useState } from "react";
import Player from "react-player";
import styles from "./Intro.module.css";
import { ModalContext, IModalContext } from "../../context/MadalContext";
import { ContainerFluid } from "../../modules/ContainerFluid/ContainerFluid";
import { Logo } from "../Logo/Logo";
import { Button } from "../Button/Button";
import { Menu } from "../../modules/Menu/Menu";
import { Htag } from "../Htag/Htag";
import { Paragraph } from "../Paragraph/Paragraph";

import PlayIcon from "../../public/svg/play.svg";

export const Intro = (): JSX.Element => {
  const controller = useContext<IModalContext>(ModalContext);

  const [mobile, setMobile] = useState<boolean>(false);

  const resizeWindow = () => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  });

  const openModal = () => {
    controller.setContent(
      <Player
        width={mobile ? "80vw" : "60vw"}
        height="auto"
        controls
        className={styles.player}
        playsinline
        config={{}}
        url={[
          { src: "/video/intro_video.webm", type: "video/webm" },
          { src: "/video/intro_video.ogv", type: "video/ogv" },
          { src: "/video/intro_video.mp4", type: "video/mp4" },
        ]}
      />
    );
    controller.open();
  };

  return (
    <ContainerFluid>
      <header className={styles.hidden}>
        <div className={styles.video}>
          <video
            className={styles.video_media}
            src="/video/intro.mp4"
            autoPlay
            muted
            loop
            playsInline
          ></video>
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
