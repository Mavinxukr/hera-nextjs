import React, { useState } from "react";
import { PostProps } from "../../../interface/post.interface";
import { Container } from "../../../modules/Container/Container";
import { Header } from "../../../modules/Header/Header";
import { BreadCrumbs } from "../../BreadCrumbs/BreadCrumbs";
// import { PostProps } from "../../../pages/blog/[...bid]";
import { Htag } from "../../Htag/Htag";
import { PostSection } from "../../PostSection/PostSection";
import { PostSidebar } from "../../PostSidebar/PostSidebar";
import styles from "./PostPage.module.css";
// import {} from "./PostPage.props";

export const PostPage = ({ post }: PostProps): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <>
      <Header background={post.preview} />
      <Container>
        <div className={styles.post}>
          <div className={styles["post__crumbs"]}>
            <BreadCrumbs
              crumbs={[
                {
                  id: 1,
                  name: "Blog",
                  path: "/blog",
                },
                {
                  id: 2,
                  name: post.title,
                  path: "#",
                },
              ]}
            />
          </div>
          <div className={styles["post__body"]}>
            <div className={styles.content}>
              <Htag className={styles["post__title"]} tag="h2" align="center">
                {post.title}
              </Htag>
              {post.article.map((item, index) => (
                <PostSection
                  key={item.id}
                  setIndex={setActiveIndex}
                  index={index}
                  {...item}
                />
              ))}
            </div>
            <div className={styles.sidebar}>
              <PostSidebar active={activeIndex} list={post.article} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
