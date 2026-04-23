import { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [event, setEvent] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const message = `Hello, I am ${name}. I want to enquire about ${event} at The Aeris Hotel.`;

    const url = `https://wa.me/9196611111107?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Book Your Event</h2>

      <input
        type="text"
        placeholder="Your Name"
        required
        onChange={(e) => setName(e.target.value)}
      />

      <select onChange={(e) => setEvent(e.target.value)}>
        <option>Wedding</option>
        <option>Birthday</option>
        <option>Ring Ceremony</option>
      </select>

      <button type="submit">Enquire on WhatsApp</button>
    </form>
  );
};

export default ContactForm;