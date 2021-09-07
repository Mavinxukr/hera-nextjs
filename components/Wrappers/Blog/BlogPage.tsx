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
import {
  importPageInQuery,
  importSearchInQuery,
} from "../../../helpers/posts.helpers";
import { Loader } from "../../Loader/Loader";
import { NoResult } from "../../NoResult/NoResult";

export const BlogPage = ({ posts, topics }: BlogProps): JSX.Element => {
  const [updateData, setUpdateData] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, []);

  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    if (
      Object.prototype.hasOwnProperty.call(router.query, "topic") &&
      router.query.topic
    ) {
      setActiveTab(router.query.topic as string);
    } else {
      setActiveTab("All");
    }
  }, [router.query]);

  const setTopic = (name: string) => {
    if (name === "All") {
      router.push(router.route);
    } else {
      router.push(`${router.route}?topic=${name}`);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <div className={styles.navigation}>
          <Search
            changeHandle={(ev) => {
              const { value } = ev.target;
              importSearchInQuery(router, value);
            }}
          />
          <BlogTabs
            setTopic={setTopic}
            topics={[
              {
                id: 0,
                name: "All",
                counter: 0,
              },
              ...topics.data,
            ]}
            active={activeTab}
          />
        </div>
        <BlogsList>
          {loading && <Loader />}
          {posts.data.length > 0 ? (
            posts.data.map((post) => (
              <BlogPreview
                key={post.id}
                href={`/blog/${post.id}`}
                img={post.cover_image}
                date={post.date}
                title={post.title}
              />
            ))
          ) : (
            <NoResult />
          )}
        </BlogsList>
        <div className={styles.paginationWrapper}>
          {posts.data.length > 0 && (
            <Pagination
              onPageChange={({ selected }) => {
                if (!updateData) {
                  setUpdateData(true);
                } else {
                  importPageInQuery(router, selected + 1);
                }
              }}
              forcePage={posts.meta.current_page - 1}
              initialPage={posts.meta.current_page - 1}
              pageCount={posts.meta.last_page}
              pageRangeDisplayed={2}
              marginPagesDisplayed={1}
            />
          )}
        </div>

        <Subscribe />
      </Container>
    </>
  );
};
