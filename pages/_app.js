import "../styles/styles.scss";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Onboarding | Landing page</title>
        <meta name="theme-color" content="#FF825C" />
        <meta name="Description" content="Onboarding next landing page" />

        {/* Load google fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Arvo:400,400i,700,700i|DM+Sans:400,400i,500,500i,700,700i&display=swap"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
