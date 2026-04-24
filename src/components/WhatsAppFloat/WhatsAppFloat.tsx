import styles from "./WhatsAppFloat.module.css";

const PHONE = "919661111107"; // ← change if needed

const WhatsAppFloat = () => {
  const message = encodeURIComponent(
    "Hi, I want to enquire about booking at The Aeris Hotel."
  );

  return (
    <a
      href={`https://wa.me/${PHONE}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.float}
    >
      <span className={styles.icon}>💬</span>
      <span className={styles.text}>Book Now</span>
    </a>
  );
};

export default WhatsAppFloat;