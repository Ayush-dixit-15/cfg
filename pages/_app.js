import "../styles/globals.css";
import Footer from "../components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
            <script src="https://accounts.google.com/gsi/client" async defer></script>
            </Head>
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
