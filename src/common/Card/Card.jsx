// Card.jsx
import React from "react";
import styles from "../../styles/common/Card.module.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({ imgUrl, title, alt, description, icon }) {
  return (
    <div className={styles.card}>
      <div className={styles.firstCard}>
        <div className={styles.tpservices__icon}>
          {/* <FontAwesomeIcon
            className={styles.flaticonCoding}
            fontSize={"60px"}
            icon={icon}
          /> */}
          <img src={imgUrl} alt={alt}></img>
        </div>
        <h4>{title}</h4>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
        <div className={styles.backCard}></div>
      </div>
    </div>
  );
}

export default Card;
