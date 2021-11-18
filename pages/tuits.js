import Link from "next/link";
import TuitCard from "../components/TuitCard";

const TuitsSSR = ({tuits}) => {



  return (
    <>
      <h1> Tuits </h1>
      <ul className="tuits-list">
        {tuits.map( tuit => (
          <Link key={tuit.id} href={`/tuitsSSR/${tuit.id}`} passHref>
            <TuitCard tuit={tuit}/>
          </Link>
          )
        )}        
      </ul>
    </>
  )
};

export const getServerSideProps = async () => {
  const response = await fetch("https://tutuitah.herokuapp.com/tuits");
  const tuitsAPI = await response.json();
  return {
		props: {
			tuits: tuitsAPI
		}
	}
};

export default TuitsSSR;