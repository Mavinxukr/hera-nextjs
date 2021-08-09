import { PrivacyPage } from "../../components/Wrappers/Privacy/PrivacyPage";
import { withLayout } from "../../modules/Layout";
import Head from "next/head";

function Privacy(): JSX.Element {
  return (
    <>
      <Head>
        <title>HERA APP | Privacy</title>
      </Head>
      <PrivacyPage />
    </>
  );
}

export default withLayout(Privacy);
