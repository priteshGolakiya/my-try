import React, { useEffect, useState } from "react";
import styles from "../../styles/common/Counter/counterStatsCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CounterStatsCard({ title, targetValue, icon }) {
  const [currentCount, setCurrentCount] = useState(0);
  const increment = 1;
  const duration = 3000;

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentCount < targetValue) {
        setCurrentCount((prevCount) => prevCount + increment);
      } else {
        clearInterval(interval);
      }
    }, duration / (targetValue / increment));

    return () => {
      clearInterval(interval);
    };
  }, [currentCount, targetValue]);

  return (
    <div className={styles.container}>
      <div className={`row ${styles.row}`}>
        <div className={`col-lg-3 ${styles.stats}`}>
          <FontAwesomeIcon
            className={styles.flaticonCoding}
            fontSize={"60px"}
            icon={icon}
          />
          <div className={`counting ${styles.counting}`}>{currentCount}+</div>
          <h5 className={`counting ${styles.countingTitle}`}>{title}</h5>
        </div>
      </div>
    </div>
  );
}

export default CounterStatsCard;
