import Head from "next/head"; 
import Image from "next/image";
import { useRouter } from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";

//Components
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const SiteHead = ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta name="title" content="Anil Khadka - Full Stack Developer" />
    <meta name="description" content="Anil Khadka - Portfolio" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/logo.png" />
    <link rel="manifest" href="/manifest.json" />
    <script
      async
      defer
      src="https://scripts.simpleanalyticscdn.com/latest.js"
    />
    <noscript>
      <Image
        src="https://queue.simpleanalyticscdn.com/noscript.gif"
        alt=""
        referrerPolicy="no-referrer-when-downgrade"
      />
    </noscript>
  </Head>
);

const PageWrapper = ({ children, title }) => (
  <div className="container">
    <SiteHead />
    <NavBar />
    <main className="main">{children}</main>
    <Footer />
  </div>
);

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  const pathToTitle = {
    "/": "Anil Khadka - Full Stack Developer",
  };

  return (
    <ChakraProvider>
      <PageWrapper title={pathToTitle[pathname]}>
        <Component {...pageProps} />
      </PageWrapper>
    </ChakraProvider>
  );
}

export default MyApp;
