import React from "react";
import styles from "../../styles/home/Carousel/TextCarousel.module.css";

const textItems = [
  {
    description:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along",
    imageUrl:
      "https://nerox.vercel.app/assets/img/testimonial/2/big/client-big-1.jpg",
    name: "Rasalina De Willmson (CEO@Orix)",
  },
  {
    description:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along",
    imageUrl:
      "https://nerox.vercel.app/assets/img/testimonial/2/big/client-big-2.jpg",
    name: "Rasalina De Willmson (CEO@Orix)",
  },
  {
    description:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along",
    imageUrl:
      "https://nerox.vercel.app/assets/img/testimonial/2/big/client-big-3.jpg",
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
              <p className={styles["description"]}>{item.description} </p>
              <img
                src={item.imageUrl}
                alt={item.name}
                className={styles["img"]}
              />
              <h1>{item.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextCarousel;
