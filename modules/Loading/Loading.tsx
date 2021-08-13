import React from "react";
import { Container } from "../Container/Container";
import styles from "./Loading.module.css";
import { Player } from "@lottiefiles/react-lottie-player";

export const Loading = (): JSX.Element => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <Player
          autoplay={true}
          src="https://assets2.lottiefiles.com/private_files/lf30_w5txogj7.json"
          loop={true}
          speed={1}
          background="transparent"
          style={{ height: "200px", background: "transparent" }}
        ></Player>
      </div>
    </Container>
  );
};
