import React from "react";
import { ITab } from "../BlogTabs.props";
import styles from "./BlogTab.module.css";

export const BlogTab = ({ name }: ITab): JSX.Element => {
  return <li className={styles.tab}>{name}</li>;
};
