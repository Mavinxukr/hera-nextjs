import { Header } from "../../../modules/Header/Header";
import { BlogPreview } from "../../BlogPreview/BlogPreview";
import { BlogsList } from "../../BlogsList/BlogsList";
import { Container } from "../../../modules/Container/Container";
import { Subscribe } from "../../Subscribe/Subscribe";
import { Pagination } from "../../Pagination/Pagination";
import styles from "./BlogPage.module.css";
import { Search } from "../../Search/Search";
import { BlogTabs } from "../../BlogTabs/BlogTabs";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { BlogProps } from "../../../interface/blog.interface";
import tabs from "./tabs";

export const BlogPage = ({ posts }: BlogProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState("All");
  const [updateData, setUpdateDate] = useState(false);
  const router = useRouter();
  const setTab = (slug: string) => {
    const url = `${router.route}?sort=${slug}`;
    router.replace(url);
  };

  useEffect(() => {
    const filters = router.query;
    console.log("fetch posts by filter", filters);
  }, []);

  useEffect(() => {
    if (updateData) {
      setActiveTab("fetch posts");
    } else {
      setUpdateDate(true);
    }
  }, [router.query]);

  return (
    <>
      <Header />
      <Container>
        <div className={styles.navigation}>
          <BlogTabs setTab={setTab} tabs={tabs} active={activeTab} />
          <Search changeHandle={(ev) => console.log(ev.target)} />
        </div>
        <BlogsList>
          {posts.map((post) => (
            <BlogPreview
              key={post._id}
              href={post.path}
              img={post.preview}
              date={post.date}
              title={post.title}
            />
          ))}
        </BlogsList>
        <div className={styles.paginationWrapper}>
          <Pagination
            initialPage={1}
            forcePage={2}
            pageCount={10}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
          />
        </div>

        <Subscribe />
      </Container>
    </>
  );
};
