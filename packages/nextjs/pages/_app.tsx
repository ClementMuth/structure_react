import { DefaultSeo } from "next-seo";
import React from "react";
import NProgress from "nprogress";
import router from "next/router";
import { ThemeFunc } from "../containers/theme";

NProgress.configure({ showSpinner: false });
router.events.on("routeChangeStart", () => NProgress.start());
router.events.on("routeChangeComplete", () => {
  NProgress.done();
});
router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps, err }) {
  return (
    <>
      <DefaultSeo
        // dangerouslySetAllPagesToNoIndex={process.env.HOSTNAME !== "https://azinove.com"}
        // dangerouslySetAllPagesToNoFollow={process.env.HOSTNAME !== "https://azinove.com"}
        canonical="https://azinove.com/"
        title="The best way to create something new."
        description="Azinove est une agence web en ligne qui vous accompagne dans la digitalisation. Réputé pour utiliser les meilleurs outils existant sur le marché. The best way to create something new."
        openGraph={{
          type: "website",
          locale: "fr_FR",
          url: "https://azinove.com",
          title: "The best way to create something new.",
          description:
            "Azinove est une agence web en ligne qui vous accompagne dans la digitalisation. Réputé pour utiliser les meilleurs outils existant sur le marché. The best way to create something new.",
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          images: [
            {
              url: "https://azinove.com/static/images/cover-1200x630.webp",
              width: 1200,
              height: 630,
              alt: "Azinove - The best way to create something new."
            }
          ],
          site_name: "Azinove"
        }}
        twitter={{
          handle: "@azinove_com",
          site: "@azinove_com",
          cardType: "summary_large_image"
        }}
      />
      <ThemeFunc>
        <Component {...pageProps} err={err} />
      </ThemeFunc>
    </>
  );
}
