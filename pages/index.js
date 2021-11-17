import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head className={styles.navBar}>
        <title>Tuitah</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Tuitah</h1>
        <div className="inline-logo"></div>
      </main>

      <footer className={styles.footer}>Powered by unicorns</footer>
    </div>
  );
}
