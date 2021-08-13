import React from "react";
import { BlogTabProps } from "../BlogTabs.props";
import styles from "./BlogTab.module.css";
import cn from "classnames";

export const BlogTab = ({ tab, active, setTab }: BlogTabProps): JSX.Element => {
  return (
    <li
      onClick={() => setTab(tab.slug)}
      className={cn(styles.tab, {
        [styles.active]: tab.slug === active,
      })}
    >
      {tab.name}
    </li>
  );
};
