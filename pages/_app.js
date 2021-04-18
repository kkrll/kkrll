import Header from "../components/header/Header";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <main className="app">
      <Header />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
