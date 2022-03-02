import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9H70XCYC6K"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9H70XCYC6K', { page_path: window.location.pathname });
            `,
          }}
        />
      </Head>
      <body className="bg-lblack">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
