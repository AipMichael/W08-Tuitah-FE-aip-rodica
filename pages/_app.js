import styles from "../styles/app.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header className={styles.headerBar}>
        <h2 className={styles.navTitle}>Tuitah</h2>
        <div className={styles.mainLogo}></div>
      </header>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
