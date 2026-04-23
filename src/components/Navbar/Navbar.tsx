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
  href="https://wa.me/919661111107?text=Hello%20I%20want%20to%20book%20a%20room%20at%20The%20Aeris%20Hotel"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.bookBtn}
>
  Book Now
</a>
    </nav>
  );
};

export default Navbar;