import Layout from "../components/layout/Layout";
import App from "next/app";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
