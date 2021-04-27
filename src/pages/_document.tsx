/* eslint-disable filenames/match-regex */
import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

/* eslint-disable functional/no-class */
class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7GYBPFCKFX"></script>
        <script
          dangerouslySetInnerHTML={{
                __html: 
                  `window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-7GYBPFCKFX');
                  `
              }}
          />
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link
            rel="preload"
            href="https://ioka.kz/fonts/TTNorms-Thin.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="https://ioka.kz/fonts/TTNorms-ThinItalic.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="https://ioka.kz/fonts/TTNorms-ExtraLight.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="https://ioka.kz/fonts/TTNorms-ExtraLightItalic.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="https://ioka.kz/fonts/TTNorms-Light.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="https://ioka.kz/fonts/TTNorms-LightItalic.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="https://ioka.kz/fonts/TTNorms-Regular.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="https://ioka.kz/fonts/TTNorms-Italic.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="https://ioka.kz/fonts/TTNorms-Bold.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="https://ioka.kz/fonts/TTNorms-BoldItalic.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="https://ioka.kz/fonts/TTNorms-ExtraBold.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="https://ioka.kz/fonts/TTNorms-ExtraBoldItalic.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="https://ioka.kz/fonts/TTNorms-Heavy.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="https://ioka.kz/fonts/TTNorms-HeavyItalic.otf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

/* eslint-disable */
export default MyDocument
