import { PrivacyPage } from "../../components/Wrappers/Privacy/PrivacyPage";
import { withLayout } from "../../modules/Layout";
import Head from "next/head";

function Privacy(): JSX.Element {
  return (
    <>
      <Head>
        <meta name="description" content="the Hera privacy policy" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"
        ></meta>
        <title>HERA APP | Privacy</title>
      </Head>
      <PrivacyPage />
    </>
  );
}

export default withLayout(Privacy);
