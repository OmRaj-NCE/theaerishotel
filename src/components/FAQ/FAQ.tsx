import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "Do you host weddings and large events?",
    a: "Yes, we specialize in luxury weddings, receptions, and large-scale celebrations with full arrangement support."
  },
  {
    q: "What is the capacity of your banquet hall?",
    a: "Our banquet can comfortably accommodate 100–400 guests depending on the setup and event type."
  },
  {
    q: "Do you provide decoration services?",
    a: "Yes, we offer premium decoration themes tailored to your event including floral, modern, and traditional styles."
  },
  {
    q: "Is outside catering allowed?",
    a: "We provide in-house premium catering. External catering may be allowed upon request."
  },
  {
    q: "Do you offer room bookings for guests?",
    a: "Yes, we provide luxury rooms for guests attending weddings or events at special package rates."
  },
  {
    q: "Is parking available?",
    a: "Yes, we have ample parking space with security for all guests."
  },
  {
    q: "How can I book or enquire?",
    a: "You can directly enquire via WhatsApp or call us for quick assistance."
  },
  {
    q: "Do you host birthday and private parties?",
    a: "Absolutely, we host birthdays, anniversaries, corporate events, and private gatherings."
  }
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className={styles.faq}>
      <h2>Frequently Asked Questions</h2>

      <div className={styles.container}>
        {faqs.map((item, i) => (
          <div
            key={i}
            className={`${styles.card} ${
              open === i ? styles.active : ""
            }`}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className={styles.question}>
              <span>{item.q}</span>
              <span className={styles.icon}>
                {open === i ? "−" : "+"}
              </span>
            </div>

            <div className={styles.answer}>
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;