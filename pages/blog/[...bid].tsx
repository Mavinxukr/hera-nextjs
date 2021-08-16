import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { PostPage } from "../../components/Wrappers/Post/PostPage";
import { withLayout } from "../../modules/Layout";
import Head from "next/head";
import { IPostItem, PostProps } from "../../interface/post.interface";
import blogs from "../../components/Wrappers/Blog/blogs";
import { useRouter } from "next/router";
import { Loading } from "../../modules/Loading/Loading";

function Post({ post }: PostProps): JSX.Element {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="NOURISH YOUR MIND, BODY AND SOUL, THROUGHOUT PREGNANCY AND MOTHERHOOD."
        />
        <meta property="og:image" content={`/${post.path}`} />
        <meta name="twitter:image" content={`/${post.path}`} />
        <meta
          property="og:image:alt"
          content="NOURISH YOUR MIND, BODY AND SOUL, THROUGHOUT PREGNANCY AND MOTHERHOOD."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"
        ></meta>
        <meta property="og:type" content="product" />
        <meta property="og:description" content="the Hera blog" />
        <meta name="description" content="the Hera blog" />
        <title>{`HERA APP | ${post?.title}`}</title>
      </Head>
      <PostPage post={post} />
    </>
  );
}

export default withLayout(Post);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = blogs.map((post: IPostItem) => post.path);

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<PostProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const { bid } = params;

  try {
    const post = blogs.filter((p: IPostItem) => String(p._id) === bid?.[0]);

    if (post.length === 0) {
      return {
        notFound: true,
      };
    } else {
      return {
        props: {
          post: post[0],
        },
      };
    }
  } catch {
    return {
      notFound: true,
    };
  }
};
