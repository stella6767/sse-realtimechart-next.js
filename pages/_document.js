import React from "react";
import Document, { Main, NextScript, Head } from "next/document"; //next의 html과 나머지 기타 기능들을 넣어주는 Main과 NextScript
import Helmet from "react-helmet"; // head태그에 넣을 정보를 jsx로 작성할 수 있게 도와준다.
import { ServerStyleSheet, createGlobalStyle } from "styled-components";
// _document.js는 index.html을 꾸며주는거다라고 생각하면 된다.
// class형으로 밖에 못 하는게 조금 아쉽다.
// ServerStyleSheet을 사용하여 서버사이드렌더링을 하게 할 수 있다.
// 전체적으로 css를 주고 싶은 부분은 createGlobalStyle을 사용하여 가능하다.
const GlobalStyles = createGlobalStyle`
       html, body {
            height: 100%;
            overflow: auto;
          }
          #__next {
            height: 100%;
          }
`;
class MyDocument extends Document {
  static getInitialProps(context) {
    const sheet = new ServerStyleSheet(); // 서버사이드 렌더링 할 수 있게함.
    const page = context.renderPage(
      App => props =>
        sheet.collectStyles(
          <>
            <GlobalStyles />
            <App {...props} />
          </>
        )
    ); // 아래의 스타일들을 모아서 페이지를 그려준다. 원래는 <GlobalStyles/> 없이 하는데 글로벌 스타일을 지정해주기 위해 저렇게 적었다.
    const styleTags = sheet.getStyleElement();
    return { ...page, helmet: Helmet.renderStatic(), styleTags };
  }
  render() {
    const { htmlAttributes, bodyAttributes, ...helmet } = this.props.helmet; // helmet으로 부터 받아온다.
    const htmlAttrs = htmlAttributes.toComponent();
    const bodyAttrs = bodyAttributes.toComponent();
    return (
      //html이랑 head, body 부분에 각각 props들을 넣어준다
      <html {...htmlAttrs}>
        <Head>
          {this.props.styleTags}
          {Object.values(helmet).map(el => el.toComponent())}
        </Head>
        <body {...bodyAttrs}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
