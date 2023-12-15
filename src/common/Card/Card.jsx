import React from "react";
import PropTypes from "prop-types";
import styles from "../../styles/common/Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({ imgUrl, title, alt, description, icon }) {
  return (
    <div className={styles.card}>
      <div className={styles.firstCard}>
        <div className={styles.tpservices__icon}>
          <FontAwesomeIcon
            className={styles.flaticonCoding}
            fontSize={"60px"}
            icon={icon}
          />
        </div>
        <h4>{title}</h4>
        {/* <img src={imgUrl} alt={alt} /> */}
        <div className={styles.description}>
          <p>{description}</p>
        </div>
        {/* <button>Add To Cart</button> */}
        <div className={styles.backCard}></div>
      </div>
    </div>
  );
}

Card.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

export default Card;
