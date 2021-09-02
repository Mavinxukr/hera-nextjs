import { BlogPage } from "../../components/Wrappers/Blog/BlogPage";
import { withLayout } from "../../modules/Layout";
import Head from "next/head";

import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getAllPosts } from "../../service/posts.service";
import { getAllTopics, ITopic } from "../../service/topics.service";
import { BlogProps } from "../../interface/blog.interface";
import { ParsedUrlQuery } from "querystring";

function Blog({ posts, topics }: BlogProps): JSX.Element {
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="NOURISH YOUR MIND, BODY AND SOUL, THROUGHOUT PREGNANCY AND MOTHERHOOD."
        />
        <meta
          property="og:image"
          content="http://theheraapp.com/images/intro.jpg"
        />
        <meta
          name="twitter:image"
          content="http://theheraapp.com/images/intro.jpg"
        />
        <meta
          property="og:image:alt"
          content="NOURISH YOUR MIND, BODY AND SOUL, THROUGHOUT PREGNANCY AND MOTHERHOOD."
        />

        <meta property="og:type" content="product" />
        <meta property="og:description" content="the Hera blog" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"
        ></meta>
        <meta name="description" content="the Hera blog" />
        <title>HERA APP | Blog</title>
      </Head>
      <BlogPage posts={posts} topics={topics} />
    </>
  );
}

export default withLayout(Blog);

export const getServerSideProps: GetServerSideProps<BlogProps, ParsedUrlQuery> =
  async ({ query }: GetServerSidePropsContext<ParsedUrlQuery>) => {
    try {
      const topics = await getAllTopics();
      const filters = { ...query };

      if (Object.prototype.hasOwnProperty.call(filters, "topic")) {
        filters.topic =
          String(
            topics.data.filter(
              (topic: ITopic) => topic.name === filters.topic
            )[0].id
          ) || "";
      }

      const posts = await getAllPosts(filters);

      return {
        props: {
          topics,
          posts,
        },
      };
    } catch {
      return {
        notFound: true,
      };
    }
  };
