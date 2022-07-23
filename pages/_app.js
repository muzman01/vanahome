import "../styles/globals.css";
import "../components/bikes/Bikes.css";
import "../components/faq/Faq.css";
import "../components/footer/Footer.css";
import "../components/header/navbar/Nav.css";
import "../components/header/Header.css";
import "../components/roadmap/Roadmap.css";
import "../components/team/Team.css";
import 'bootstrap/dist/css/bootstrap.css'
import "aos/dist/aos.css";
import 'react-slideshow-image/dist/styles.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ava Bikes NFT</title>
        <meta name="description" content="Ava Bikes NFT" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="icon" href="/assets/bfmain.png" /> */}
      </Head>
      
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
