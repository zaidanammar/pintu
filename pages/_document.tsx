import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => (
  <Html lang="en" id="theme">
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link href="http://fonts.cdnfonts.com/css/neue-haas-grotesk-display-pro" rel="stylesheet" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
