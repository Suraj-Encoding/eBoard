import "../common/styles/global.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";

import ModalManager from "@/common/components/modal/components/ModalManager";
import "react-toastify/dist/ReactToastify.min.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        {/* Title */}
        <title>eBoard | Online Whiteboard for Realtime Collaboration</title>
        <link rel="icon" href="/wlogo.png" />
      </Head>
      <RecoilRoot>
        <ToastContainer />
        <ModalManager />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
};

export default App;
