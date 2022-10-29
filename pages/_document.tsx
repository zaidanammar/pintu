import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => (
  <Html lang="en" id="theme">
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700&display=swap"
        rel="preconnect"
      />
      <link href="https://fonts.cdnfonts.com/css/neue-haas-grotesk-display-pro" rel="preconnect" />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="   https://s3.ap-southeast-1.amazonaws.com/content.pintu.co.id/ic_launcher_1493da4144.png"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
