import styles from "../styles/app.module.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header className={styles.headerBar}>
        <h2 className={styles.navTitle}>Tuitah</h2>
        <div className={styles.mainLogo}></div>

        <Link href="/newtuit" className={styles.headRoutes}>
          <span className={styles.headRoutes}>New Tuit</span>
        </Link>
      </header>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
