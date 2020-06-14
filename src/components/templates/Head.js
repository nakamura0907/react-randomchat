import React from "react";
import {Helmet} from "react-helmet";

const Head = () => {
    return (
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>ランダムチャット</title>
        <meta name="description" content="React.jsで作成した、ランダムにマッチングするチャットアプリです。" />
        <meta name="keywords" content="React.js チャット" />
        <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet" />
      </Helmet>
    );
  };
  
  export default Head;