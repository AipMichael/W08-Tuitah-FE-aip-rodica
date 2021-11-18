import styles from "../styles/Home.module.css";

const TuitCard = ({tuit, onDelete}) => {

  const showDate = (fecha) => {
    const date = new Date(fecha);
    return date.toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' })
  };

  return (
    <li className="tuit-item">
      <div className={styles.card}> 
        <p> {`Fecha: ${ showDate(tuit.date) }`} </p>  
        <p> {`Mensaje: ${tuit.text}`} </p>  
        <p> {`Likes: ${tuit.likes}`} </p>
        <button className={styles.button} type="submit"> Delete </button> 
      </div>
    </li>
  )
};

export default TuitCard;