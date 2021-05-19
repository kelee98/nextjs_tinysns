import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react';
class MyDocument extends Document {
  

  render() {
    return (
      <Html  lang ="ko">
        <Head>
          <title>my example sns</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"></link>
        </Head>
        <body>
          <div className="container">
          <Main />
          </div>
          
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;