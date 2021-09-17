import React from "react";
// import * as snippet from "@segment/snippet";
import Document, { Head, Html, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="fr-FR">
        <Head>
          <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
          <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />
          <link rel="stylesheet" type="text/css" href="/static/css/nprogress.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/responsif/footer.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/responsif/home.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/responsif/header.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/responsif/about.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/responsif/lottie.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/svg/professionnel.css" />
          <link rel="stylesheet" type="tddext/css" href="/static/css/svg/particular.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/svg/404.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/svg/lega-mention.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/svg/project-loader.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/context-menu-wrapper.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/fast-selectable.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/dialog.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/switch.css" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
