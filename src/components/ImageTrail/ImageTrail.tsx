import { useEffect, useRef } from "react";
import styles from "./ImageTrail.module.css";

// local images
import img1 from "../../assets/trail/img1.jpg";
import img2 from "../../assets/trail/img2.jpg";
import img3 from "../../assets/trail/img3.jpg";
import img4 from "../../assets/trail/img4.jpg";
import img5 from "../../assets/trail/img5.jpg";
import img6 from "../../assets/trail/img6.jpg";
import img7 from "../../assets/trail/img7.jpg";
import img8 from "../../assets/trail/img8.jpg";
import img9 from "../../assets/trail/img9.jpg";
import img10 from "../../assets/trail/img10.jpg";
import img11 from "../../assets/trail/img11.jpg";
import img12 from "../../assets/trail/img12.jpg";

const images = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12
];

const ImageTrail = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const index = useRef(0);
  const lastTime = useRef(0);

  useEffect(() => {
    // preload
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const handleMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime.current < 120) return;

      lastTime.current = now;

      const img = document.createElement("img");
      img.src = images[index.current % images.length];
      img.className = styles.trail;

      img.style.left = `${e.clientX}px`;
      img.style.top = `${e.clientY}px`;

      containerRef.current?.appendChild(img);

      setTimeout(() => img.remove(), 900);

      index.current++;
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className={styles.wrapper}>
      {/* ✨ Ambient Floating Images */}
      <div className={styles.ambient}>
        {images.slice(0, 6).map((img, i) => (
          <img key={i} src={img} className={styles.float} />
        ))}
      </div>

      {/* 🖱️ Trail Layer */}
      <div ref={containerRef} className={styles.container}></div>

      {/* ✍️ Text Overlay */}
      <div className={styles.text}>
        <h2>Explore The Experience</h2>
        <p>Move your cursor to feel the space</p>
      </div>
    </section>
  );
};

export default ImageTrail;