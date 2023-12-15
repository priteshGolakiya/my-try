// Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/home/Hero";
import Card from "../common/Card/Card"; // Import Card from the same directory
import CounterStatsCard from "../common/Counter/CounterStatsCard"; // Import CounterStatsCard
import styles from "../styles/home/Home.module.css"; // Import your custom CSS for the Home component
import {
  faAward,
  faCheck,
  faDesktop,
  faMugHot,
  faPenClip,
  faPeoplePulling,
} from "@fortawesome/free-solid-svg-icons";
import CardSecond from "../common/CardSecond/CardSecond";
import TextCarousel from "../common/Carousel/TextCarousel";
import TextCarousel2 from "../common/Carousel/TextCarousel2.jsx";
import { proTeam, recentCaseStudies } from "../Data/Data";

const cardsData = [
  {
    imgUrl: "https://source.unsplash.com/random?landscape,mountain",
    title: "Grapic Design",
    alt: "Try",
    description: "...",
    icon: faDesktop,
  },
  {
    imgUrl: "https://source.unsplash.com/random?landscape,mountain",
    title: "App Design",
    alt: "App Design",
    description: "...",
    icon: faPenClip,
  },
  {
    imgUrl: "https://source.unsplash.com/random?landscape,mountain",
    title: "App Design",
    alt: "App Design",
    description: "...",
    icon: faPenClip,
  },
  {
    imgUrl: "https://source.unsplash.com/random?landscape,mountain",
    title: "App Design",
    alt: "App Design",
    description: "...",
    icon: faPenClip,
  },
  {
    imgUrl: "https://source.unsplash.com/random?landscape,mountain",
    title: "App Design",
    alt: "App Design",
    description: "...",
    icon: faPenClip,
  },
  {
    imgUrl: "https://source.unsplash.com/random?landscape,mountain",
    title: "App Design",
    alt: "App Design",
    description: "...",
    icon: faPenClip,
  },
  {
    imgUrl: "https://source.unsplash.com/random?landscape,mountain",
    title: "App Design",
    alt: "App Design",
    description: "...",
    icon: faPenClip,
  },
  {
    imgUrl: "https://source.unsplash.com/random?landscape,mountain",
    title: "App Design",
    alt: "App Design",
    description: "...",
    icon: faPenClip,
  },
  // Add more card data as needed
];

const counterData = [
  { title: "Staticfied Customers", targetValue: 329, icon: faPeoplePulling },
  { title: "Complete Project", targetValue: 89, icon: faCheck },
  { title: "Win Global Award", targetValue: 100, icon: faAward },
  { title: "Cup of Coffee", targetValue: 100, icon: faMugHot },
  // Add more counters with target values and icons
];

function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <h1 className={styles.pageTitle}>My Service Area</h1>

      {/* card start  */}
      <div className={styles.cardGrid}>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            imgUrl={card.imgUrl}
            title={card.title}
            alt={card.alt}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>
      {/* card ends */}

      <section className={styles.hero}>
        <h1 className={styles.about}>ABOUT COMPANY</h1>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Refreshingly Unique Company Mission Vision
          </h1>
          <p className={styles.heroDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo
          </p>
          <Link to="/" className={styles.heroButton}>
            Jump for a quick Meeting
          </Link>
          <Link to="/" className={styles.heroButton}>
            Play demo Video
          </Link>
        </div>
      </section>

      {/* Counter cards */}
      <div className={`${styles.counter}`}>
        {counterData.map((counter, index) => (
          <CounterStatsCard
            key={index}
            title={counter.title}
            targetValue={counter.targetValue}
            icon={counter.icon}
          />
        ))}
      </div>

      <h1 className={styles.work}>WORK GALLERY</h1>
      <h1 className={styles.recentCase}>Recent Case Studies</h1>

      <CardSecond data={recentCaseStudies} />

      <section className={styles.hero}>
        <h1 className={styles.about}>ABOUT COMPANY</h1>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>What our Customer Say</h1>
          <TextCarousel />
        </div>
      </section>

      <TextCarousel2 />

      <h1 className={styles.about}>MEET OUR TEAM</h1>
      <h1 className={styles.heroTitle}>What our Customer Say</h1>

      <CardSecond data={proTeam} />
    </div>
  );
}

export default Home;
