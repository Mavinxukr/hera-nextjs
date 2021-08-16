import HomePage from "../components/Wrappers/Home/HomePage";
import { withLayout } from "../modules/Layout";
import Head from "next/head";

function Home(): JSX.Element {
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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"
        ></meta>
        <meta property="og:type" content="product" />
        <meta property="og:description" content="the Hera app" />
        <meta name="description" content="the Hera app" />
        <title>HERA APP</title>
      </Head>
      <HomePage />
    </>
  );
}

export default withLayout(Home);
