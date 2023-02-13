import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider initializeOnMount={false}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MoralisProvider>
  );
}

export default MyApp;
