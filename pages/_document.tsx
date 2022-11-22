import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { CssBaseline } from "@nextui-org/react";

// This is a custom document that is used to render the initial HTML
// that is sent to the browser. It is only rendered on the server side
// and not on the client side. It is used to inject global styles.
//

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps, styles: <>{initialProps.styles}</> };
  }
  render() {
    return (
      <Html>
        {/* // This is where we inject the global styles */}
        <Head>{CssBaseline.flush()}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
