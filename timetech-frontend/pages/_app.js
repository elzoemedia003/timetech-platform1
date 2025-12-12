import "../styles/globals.css";
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }) {
  // Pages can opt out of Layout by setting Component.noLayout = true
  if (Component.noLayout) {
    return <Component {...pageProps} />;
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
