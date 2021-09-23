import React from "react";
import { BlogTabProps } from "../BlogTabs.props";
import styles from "./BlogTab.module.css";
import cn from "classnames";

export const BlogTab = ({
  tab,
  active,
  setTopic,
}: BlogTabProps): JSX.Element => {
  return (
    <li
      onClick={() => setTopic(tab.name)}
      className={cn(styles.tab, {
        [styles.active]: tab.name === active,
      })}
    >
      {tab.name}
    </li>
  );
};
