import React from "react";
import { ITopic } from "../../service/topics.service";
import { BlogTab } from "./BlogTab/BlogTab";
import styles from "./BlogTabs.module.css";
import { BlogTabsProps } from "./BlogTabs.props";

export const BlogTabs = ({
  topics,
  active,
  setTopic,
}: BlogTabsProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {topics.map((tab: ITopic) => (
          <BlogTab
            tab={tab}
            active={active}
            setTopic={() => setTopic(tab.name)}
            key={tab.id}
          />
        ))}
      </ul>
    </div>
  );
};
