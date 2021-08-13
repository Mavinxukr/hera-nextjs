import React from "react";
import { BlogTab } from "./BlogTab/BlogTab";
import styles from "./BlogTabs.module.css";
import { BlogTabsProps, ITab } from "./BlogTabs.props";

export const BlogTabs = ({
  tabs,
  active,
  setTab,
}: BlogTabsProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {tabs.map((tab: ITab) => (
          <BlogTab
            tab={tab}
            active={active}
            setTab={() => setTab(tab.slug)}
            key={tab._id}
            {...tab}
          />
        ))}
      </ul>
    </div>
  );
};
