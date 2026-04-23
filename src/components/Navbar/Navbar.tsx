import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>The Aeris Hotel</div>

      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/gallery">Gallery</Link>
      </div>

      <a
        href="https://wa.me/9196611111107"
        target="_blank"
        className={styles.cta}
      >
        Book Now
      </a>
    </nav>
  );
};

export default Navbar;