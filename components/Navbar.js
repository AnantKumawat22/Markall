import React from "react";
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <p><Link href="#">MARKALL</Link></p>
        <ul>
          <li><Link href="#">Services</Link></li>
          <li><Link href="#">Pricing</Link></li>
          <li><Link href="#">About Us</Link></li>
        </ul>
        <button>Get Started</button>
      </nav>
    </>
  );
};

export default Navbar;
