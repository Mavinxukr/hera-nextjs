import React from "react";
import { Htag } from "../Htag/Htag";
import styles from "./NoResult.module.css";
import NoresultIcon from "../../public/svg/noresult.svg";

export const NoResult = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Htag align="center" className={styles.title} tag="subtitle">
        Sorry, no results were found.
      </Htag>
      <NoresultIcon />
    </div>
  );
};
