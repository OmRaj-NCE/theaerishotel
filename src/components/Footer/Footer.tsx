import { useRef } from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ref.current?.style.setProperty("--x", `${x}px`);
    ref.current?.style.setProperty("--y", `${y}px`);
  };

  return (
    <footer ref={ref} onMouseMove={handleMove} className={styles.footer}>

      {/* Glow Layer */}
      <div className={styles.glow}></div>

      <div className={styles.container}>

        {/* LEFT */}
        <div className={styles.brand}>
          <h2>The Aeris Hotel</h2>
          <p>Luxury Stay • Restaurant • Banquet</p>
        </div>

        {/* CENTER */}
        <div className={styles.links}>
          <h4>Explore</h4>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/gallery">Gallery</a>
        </div>

        {/* RIGHT */}
        <div className={styles.contact}>
          <h4>Contact</h4>
          <p>📍 Patna, Bihar</p>
          <p>📞 +91 9661111107</p>

          <a
            href="https://wa.me/919661111107"
            target="_blank"
            className={styles.cta}
          >
            Enquire on WhatsApp
          </a>
        </div>

      </div>

      <div className={styles.bottom}>
        © 2026 The Aeris Hotel. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;