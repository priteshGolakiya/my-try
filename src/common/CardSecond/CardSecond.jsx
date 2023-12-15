import React from "react";
import Styles from "../../styles/common/CardSecond/CardSecond.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardSecond = ({ data }) => {
  const renderCard = ({ title, description, imageUrl, icon }) => (
    <div className={Styles.card} key={title}>
      <div className={Styles.cardInner}>
        <div className={Styles.cardTop}>
          <h1>{title}</h1>
        </div>
        <img src={imageUrl} alt={title} className={Styles.cardImage} />
        <div className={Styles.cardBottom}>
          <p>{description}</p>
          <p>
            <FontAwesomeIcon icon={icon} />
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className={Styles.container}>
      <div className={Styles.grid}>{data.map(renderCard)}</div>
    </div>
  );
};

export default CardSecond;
