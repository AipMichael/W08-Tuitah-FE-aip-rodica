/* import Link from "next/link";
import { useState } from "react";
import TuitCard from "../components/TuitCard";
import styles from "../styles/Home.module.css";

const TuitsSSR = ({ tuits }) => {
  const [tuitsList, setTuitsList] = useState(tuits);

  const onDelete = async (id) => {
    await fetch(`https://tutuitah.herokuapp.com/tuits/delete`, {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setTuitsList(tuitsList.filter((tuit) => tuit.id !== id));
  };

  return (
    <>
      <h1> Today`s tuits </h1>
      <ul className={styles.cardsList}>
        {tuits.((tuit) => (
          <Link key={tuit.id} href={`/tuitsSSR/${tuit.id}`} passHref>
            <TuitCard tuit={tuit} onDelete={onDelete} />
          </Link>
        ))}
      </ul>
    </>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch("https://tutuitah.herokuapp.com/tuits");
  const tuitsAPI = await response.json();
  return {
    props: {
      tuits: tuitsAPI,
    },
  };
};

export default TuitsSSR;
 */
