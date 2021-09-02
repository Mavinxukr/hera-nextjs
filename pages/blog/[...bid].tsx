import { GetStaticPaths, GetStaticProps } from "next";
import { PostPage } from "../../components/Wrappers/Post/PostPage";
import { withLayout } from "../../modules/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import { Loading } from "../../modules/Loading/Loading";
import { getAllPosts, getPostById } from "../../service/posts.service";
import { PostProps } from "../../interface/post.interface";

function Post({ post }: PostProps): JSX.Element {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <meta property="og:title" content={post.title} />
        <meta property="og:image" content={`${post.cover_image}`} />
        <meta name="twitter:image" content={`${post.cover_image}`} />
        <meta property="og:image:alt" content={post.title} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"
        ></meta>
        <meta property="og:type" content="post" />
        <meta property="og:description" content={post.subtitles[0].title} />
        <meta name="description" content={post.subtitles[0].title} />
        <title>{`HERA APP | ${post?.title}`}</title>
      </Head>
      <PostPage post={post} />
    </>
  );
}

export default withLayout(Post);

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts({});
  const paths: string[] = posts.data.map((post) => `/blog/${post.id}`);

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const { bid } = params;

  if (!bid || bid?.length === 0) {
    return {
      notFound: true,
    };
  }

  try {
    const post = await getPostById({ bid: Number(bid[0]) });

    if (!post) {
      return {
        notFound: true,
      };
    } else {
      return {
        props: {
          post: post.data,
        },
      };
    }
  } catch {
    return {
      notFound: true,
    };
  }
};
