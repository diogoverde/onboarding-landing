import "../styles/styles.scss";
import * as ga from "../lib/ga";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
