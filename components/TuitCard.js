const TuitCard = ({tuit}) => {

  const showDate = (fecha) => {
    const date = new Date(fecha);
    return date.toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' })
  };

  return (
    <li className="tuit-item"> 
      <p> {`Fecha: ${ showDate(tuit.date) }`} </p>  
      <p> {`Mensaje: ${tuit.text}`} </p>  
      <p> {`Likes: ${tuit.likes}`} </p>
    </li>
  )
};

export default TuitCard;