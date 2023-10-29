import React from "react";
import styles from "../styles/layout/Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const toggleMenuClicked = () => {
    const body = document.body;
    const openIcon = document.getElementById("open-icon");
    const closeIcon = document.getElementById("close-icon");

    body.classList.toggle(styles.open);

    if (body.classList.contains(styles.open)) {
      openIcon.style.display = "none";
      closeIcon.style.display = "flex"; // Added semicolon here
    } else {
      openIcon.style.display = "flex";
      closeIcon.style.display = "none"; // Added semicolon here
    }
  };

  return (
    <nav className={styles["navigation-menu"]}>
      <div
        className={styles["navigation-menu__overlay"]}
        onClick={toggleMenuClicked}
      ></div>
      <button
        type="button"
        className={styles["hamburger-menu"]}
        onClick={toggleMenuClicked}
      >
        <span className="material-icons" id="open-icon">
          menu
        </span>
        <span className="material-icons" id="close-icon">
          close
        </span>
      </button>
      <h1 className={styles["site-identity-logo"]}>Pritesh Golakiya</h1>
      <section className={styles["navigation-menu__labels"]}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/pages">Pages</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact Us</Link>
      </section>
    </nav>
  );
};

export default Navbar;
