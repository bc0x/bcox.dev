import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  renderHead() {
    return (
      <Head>
        <title>Brandon Cox</title>
        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Sans+Condensed"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="Description" content="Brandon Cox -- Software Developer" />
      </Head>
    );
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        {this.renderHead()}
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
