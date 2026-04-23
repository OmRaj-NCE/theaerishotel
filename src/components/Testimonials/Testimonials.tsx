import { useState } from "react";
import styles from "./Testimonials.module.css";

const data = [
  {
    name: "Rahul Sharma",
    text: "Amazing experience. The banquet was perfect for our wedding!",
  },
  {
    name: "Priya Verma",
    text: "Rooms were luxurious and service was top-notch.",
  },
  {
    name: "Amit Singh",
    text: "Best hotel in Patna for events and stays.",
  },
  {
    name: "Sneha Kapoor",
    text: "Loved the ambience and hospitality. Highly recommended!",
  },
  {
    name: "Vikram Yadav",
    text: "Perfect place for celebrations. Everything was well managed.",
  },
];

const Testimonials = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section className={styles.wrapper}>
      <h2>What Our Guests Say</h2>

      <div
        className={`${styles.slider} ${paused ? styles.pause : ""}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className={styles.track}>
          {[...data, ...data].map((t, i) => (
            <div key={i} className={styles.card}>
              <p>"{t.text}"</p>
              <h4>- {t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;