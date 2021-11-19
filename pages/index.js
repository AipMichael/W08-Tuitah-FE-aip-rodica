import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import TuitCard from "../components/TuitCard";
import styles from "../styles/Home.module.css";
import NewPostForm from "../components/NewPostForm";

export default function Home({ tuits }) {
  const [tuitsList, setTuitsList] = useState([]);

  const onDelete = async (id, event) => {
    event.preventDefault();
    await fetch(`https://tutuitah.herokuapp.com/tuits/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setTuitsList(tuitsList.filter((tuit) => tuit.id !== id));
  };

  return (
    <div className={styles.container}>
      <Head className={styles.navBar}>
        <title>Tuitah</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Tuitah</h1>
        <div className="inline-logo"></div>
        <main className={styles.mainForm}>
          <NewPostForm />
        </main>

        <h2 className={styles.cardsTitle}> Today`s tuits </h2>
        <ul className={styles.cardsList}>
          {tuits.map((tuit, i) => (
            <li key={i}>
              <Link key={i} href={`/${tuit.id}`} passHref>
                <TuitCard tuit={tuit} onDelete={onDelete} />
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>Powered by unicorns</footer>
    </div>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch("https://tutuitah.herokuapp.com/tuits");
  const tuitsAPI = await response.json();
  return {
    props: {
      tuits: tuitsAPI,
    },
  };
};
