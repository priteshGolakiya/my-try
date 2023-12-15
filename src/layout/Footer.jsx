// Footer.jsx
import React from "react";
import styles from "../styles/layout/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contactInfo}>
        <h3>Contact Info</h3>
        <p>
          Any Question? <br />
          Methods and techniques for extracting insights from raw data, backed
          by years of experience.
        </p>
        <ul>
          <li> Ta - 134 / A, Gulshan Badda Link Rd, Nya 10982 USA</li>
          <li>rasalinawillam@gmail.com</li>
          <li>info@gmail.com</li>
          <li>+08 98787 8773 345</li>
          <li>+08 98787 8773 345</li>
        </ul>
      </div>
      <div className={styles.getInTouch}>
        <h3>Get In Touch</h3>
        <form>
          <input type="text" placeholder="Enter Name" />
          <input type="email" placeholder="Enter Mail" />
          <textarea placeholder="Enter your Message" />
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
