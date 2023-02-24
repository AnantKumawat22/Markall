import React from "react";
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <p>MARKALL</p>
        <ul>
          <li>Services</li>
          <li>Pricing</li>
          <li>About Us</li>
        </ul>
        <button>Get Started</button>
      </nav>
    </>
  );
};

export default Navbar;
