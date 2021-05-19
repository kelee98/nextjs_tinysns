/**
* app.js 특징
    1. 페이지 전환시 레이아웃을 유지 할 수있습니다.
    2. 페이지 전환시 상태값을 유지 할 수있습니다.
    3. componentDidCatch 를 이용해서 커스텀 에러 핸들링을 할 수있습니다.
    4. 추가적인 데이터를 페이지로 주입시켜주는 게 가능합니다.
    5. 글로벌 css를 이곳에 주입합니다.
    *
    */

import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import Footer from '../src/component/Footer'
import Top from '../src/component/Top'
import React from 'react';
function MyApp({ Component, pageProps }) {
  return(
    <div>
      <Top/>
      <Component {...pageProps} />;
      <Footer/>
    </div>
  );
}

export default MyApp
