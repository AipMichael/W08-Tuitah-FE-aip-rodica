import Link from "next/link";

const TuitsSSR = ({tuits}) => {
  
  const showDate = (fecha) => {
    const date = new Date(fecha);
    return date.toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' })
  };

  return (
    <>
      <h1> Tuits </h1>
      <ul className="tuits-list">
        {tuits.map( tuit => (
          <Link key={tuit.id} href={`/tuitsSSR/${tuit.id}`} passHref>
            <li className="tuit-item"> 
              <p> {`Fecha: ${ showDate(tuit.date) }`} </p>  
              <p> {`Mensaje: ${tuit.text}`} </p>  
              <p> {`Likes: ${tuit.likes}`} </p>
            </li>
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