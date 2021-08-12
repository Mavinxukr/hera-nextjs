import React from "react";
import { Htag } from "../Htag/Htag";
import styles from "./PostSidebar.module.css";
import cn from "classnames";
import { IPostSidebar } from "../../interface/post.interface";

export const PostSidebar = ({ list, active }: IPostSidebar): JSX.Element => {
  return (
    <aside className={styles.sidebar}>
      <Htag className={styles.title} tag="h4" align="center">
        Contents
      </Htag>
      <ul className={styles["sidebar__list"]}>
        {list.map((item, index) => (
          <li key={item.id} className={styles.item}>
            <span
              className={cn(styles.count, {
                [styles.active]: active === index + 1,
              })}
            >{`${index + 1} `}</span>
            <a
              className={cn(styles.link, {
                [styles.active]: active === index + 1,
              })}
              href={`#section${item.id}`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
