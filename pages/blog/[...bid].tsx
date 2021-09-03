import { GetStaticPaths, GetStaticProps } from "next";
import { PostPage } from "../../components/Wrappers/Post/PostPage";
import { withLayout } from "../../modules/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import { Loading } from "../../modules/Loading/Loading";
import { PostProps } from "../../interface/post.interface";
import axios from "../../core/axios";

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
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      </Head>
      <PostPage post={post} />
    </>
  );
}

export default withLayout(Post);

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: posts } = await axios.get("/all-blog-articles");

  const paths: string[] = posts.data.map(
    (post: { id: number; title: string }) => `/blog/${post.id}`
  );

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
    const { data: post } = await axios.get(`/blog-articles/${bid}`);

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
