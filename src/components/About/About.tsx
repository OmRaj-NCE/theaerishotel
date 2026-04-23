import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.left}>
        <h2>Experience The Aeris</h2>
        <p>
          Located in the heart of Patna, The Aeris Hotel is designed for those
          who seek more than just a stay. From luxurious rooms to thoughtfully
          curated dining experiences, every detail is crafted to elevate comfort
          and elegance.
        </p>
        <p>
          Whether you're hosting a wedding, celebrating a milestone, or simply
          unwinding, our spaces are built to create unforgettable moments.
        </p>
      </div>

      <div className={styles.right}></div>
    </section>
  );
};

export default About;