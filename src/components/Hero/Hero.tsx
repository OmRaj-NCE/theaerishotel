import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import heroImg from "../../assets/hero.jpg";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🎯 control values
  const scale = 1 - scrollY * 0.0005;
  const opacity = 1 - scrollY * 0.002;
  const translateY = scrollY * 0.3;

  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <div className={styles.overlay}></div>

      {/* 🎥 CONTENT */}
      <div
        className={styles.content}
        style={{
          transform: `translateY(-${translateY}px) scale(${scale})`,
          opacity: opacity < 0 ? 0 : opacity,
        }}
      >
        <h1>Luxury Stay in Patna</h1>
        <p>Where Comfort Meets Elegance</p>

        <div className={styles.actions}>
          <a href="#" className={styles.primaryBtn}>
            Book Now
          </a>
          <a href="/services" className={styles.secondaryBtn}>
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;