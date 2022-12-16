import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import Script from 'next/script';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>바로해루</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="description" content="올바른 해루질, 바로 알아봐요" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="바로해루" />
          <meta
            property="og:description"
            content="올바른 해루질, 바로 알아봐요"
          />
          <meta
            property="og:image"
            content="https://haeruworld.s3.ap-northeast-2.amazonaws.com/img_cover.png"
          />
          <meta property="og:url" content="https://baru-haeru.vercel.app" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&libraries=services,clusterer&autoload=false`}
            strategy="beforeInteractive"
          />
        </body>
      </Html>
    );
  }
}
