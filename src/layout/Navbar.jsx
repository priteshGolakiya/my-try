import React from "react";
import styles from "../styles/layout/Navbar.module.css";
import { NavLink } from "react-router-dom";

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
        <NavLink className={styles["link"]} to="/">
          Home
        </NavLink>
        <NavLink className={styles["link"]} to="/about">
          About
        </NavLink>
        <NavLink className={styles["link"]} to="/blog">
          Blog
        </NavLink>
        <NavLink className={styles["link"]} to="/pages">
          Pages
        </NavLink>
        <NavLink className={styles["link"]} to="/services">
          Services
        </NavLink>
        <NavLink className={styles["link"]} to="/contact">
          Contact Us
        </NavLink>
      </section>
    </nav>
  );
};

export default Navbar;
