import React from "react";
import styles from "../../styles/home/Carousel/TextCarousel.module.css";

const textItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

const TextCarousel = () => {
  return (
    <div className={styles["text-carousel"]}>
      <div className={styles["text-container"]}>
        <div className={styles["text-items"]}>
          {textItems.map((item, index) => (
            <div key={index} className={styles["text-item"]}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextCarousel;
