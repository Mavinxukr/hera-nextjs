import React from "react";
import styles from "./Loader.module.css";
import { Player } from "@lottiefiles/react-lottie-player";

export const Loader = (): JSX.Element => (
  <div className={styles.loader}>
    <Player
      autoplay={true}
      src="https://assets2.lottiefiles.com/private_files/lf30_w5txogj7.json"
      loop={true}
      speed={1}
      background="transparent"
      style={{ height: "200px", background: "transparent" }}
    ></Player>
  </div>
);
