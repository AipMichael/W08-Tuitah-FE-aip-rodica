import PropTypes from "prop-types";
import React from "react";
import styles from "../styles/Home.module.css";

// eslint-disable-next-line react/display-name
const TuitCard = React.forwardRef(({ onDelete, tuit, href }, ref) => {
  const showDate = (fecha) => {
    console.log(ref);
    const date = new Date(fecha);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  return (
    <a className="tuit-item" href={href}>
      <div className={styles.card}>
        <p> {`Fecha: ${showDate(tuit.date)}`} </p>
        <p> {`Mensaje: ${tuit.text}`} </p>
        <p> {`Likes: ${tuit.likes}`} </p>
        <button
          className={styles.buttonCard}
          type="submit"
          onClick={(event) => {
            // eslint-disable-next-line no-underscore-dangle
            onDelete(tuit._id, event);
          }}
        >
          Delete
        </button>
      </div>
    </a>
  );
});

TuitCard.propTypes = {
  tuit: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TuitCard;
