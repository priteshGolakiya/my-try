import React from "react";
import styles from "../../styles/home/Carousel/TextCarousel.module.css";

const textItems = [
  {
    imageUrl: "https://nerox.vercel.app/assets/img/brand/2/brand-1.png",
    name: "Rasalina De Willmson (CEO@Orix)",
  },
  {
    imageUrl: "https://nerox.vercel.app/assets/img/brand/2/brand-2.png",
    name: "Rasalina De Willmson (CEO@Orix)",
  },
  {
    imageUrl: "https://nerox.vercel.app/assets/img/brand/2/brand-3.png",
    name: "Rasalina De Willmson (CEO@Orix)",
  },
  {
    imageUrl: "https://nerox.vercel.app/assets/img/brand/2/brand-4.png",
    name: "Rasalina De Willmson (CEO@Orix)",
  },
  {
    imageUrl: "https://nerox.vercel.app/assets/img/brand/2/brand-5.png",
    name: "Rasalina De Willmson (CEO@Orix)",
  },
];

const TextCarousel = () => {
  return (
    <div className={styles["text-carousel"]}>
      <div className={styles["text-container"]}>
        <div className={styles["text-items"]}>
          {textItems.map((item, index) => (
            <div key={index} className={styles["text-item"]}>
              <img
                src={item.imageUrl}
                alt={item.name}
                className={styles["img"]}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextCarousel;
