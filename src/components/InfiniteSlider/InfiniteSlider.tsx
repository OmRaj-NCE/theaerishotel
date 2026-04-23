import styles from "./InfiniteSlider.module.css";

const images = [
  "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
  "https://images.unsplash.com/photo-1590490360182-c33d57733427",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
];

const InfiniteSlider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.track}>
        {[...images, ...images].map((img, i) => (
          <img key={i} src={img} />
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;