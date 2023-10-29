import React, { useState } from "react";
import styles from "../../styles/home/Carousel/Carousel.module.css";

const ImageSlider = () => {
  const slides = [
    {
      imageSrc: "https://source.unsplash.com/random?landscape,mountain",
      message: "Beautiful mountain landscape",
    },
    {
      imageSrc: "https://source.unsplash.com/random?landscape,cars",
      message: "Cool cars at night",
    },
    {
      imageSrc: "https://source.unsplash.com/random?landscape,night",
      message: "Nighttime cityscape",
    },
    {
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1697504578956-fdb28e11933c?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8",
      message: "City skyline",
    },
  ];

  const [curSlide, setCurSlide] = useState(0);

  const maxSlide = slides.length - 1;

  const nextSlide = () => {
    setCurSlide((prevSlide) => (prevSlide === maxSlide ? 0 : prevSlide + 1));
  };

  return (
    <div className={styles.slider}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={styles.slide}
          style={{ transform: `translateX(${100 * (index - curSlide)}%)` }}
        >
          <img src={slide.imageSrc} alt={`Slide ${index + 1}`} />
          <div className={styles.caption}>{slide.message}</div>
        </div>
      ))}

      <button
        className={`${styles.btn} ${styles["btn-next"]}`}
        onClick={nextSlide}
      >
        {">"}
      </button>
      <button
        className={`${styles.btn} ${styles["btn-prev"]}`}
        onClick={() =>
          setCurSlide((prevSlide) =>
            prevSlide === 0 ? maxSlide : prevSlide - 1
          )
        }
      >
        {"<"}
      </button>
    </div>
  );
};

export default ImageSlider;
