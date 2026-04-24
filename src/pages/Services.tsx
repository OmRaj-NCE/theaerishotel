import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typewriter from "../components/Typewriter/Typewriter";
import styles from "./Services.module.css";
import SEO from "../components/SEO/SEO";

const services = [
  { id: "wedding", title: "Wedding", desc: "Grand luxury wedding events" },
  { id: "birthday", title: "Birthday", desc: "Memorable celebrations" },
  { id: "ring", title: "Ring Ceremony", desc: "Elegant intimate events" },
];
<SEO
  title="Services | The Aeris Hotel"
  description="Explore wedding, birthday, corporate and banquet services at The Aeris Hotel."
  url="https://theaerishotel.vercel.app/services"
/>
const Services = () => {
  const [active, setActive] = useState<string | null>(null);
  const navigate = useNavigate();
  
  const toggle = (id: string) => {
    setActive(active === id ? null : id);
  };

  return (
    <div className={styles.wrapper}>
      <Typewriter />

      {/* Cards */}
      <div className={styles.cards}>
        {services.map((s) => (
          <div
            key={s.id}
            className={`${styles.card} ${
              active && active !== s.id ? styles.hidden : ""
            } ${active === s.id ? styles.active : ""}`}
            onClick={() => toggle(s.id)}
          >
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>

      {/* 💰 BOOKING SECTION (NOW INSIDE SERVICES PAGE) */}
      {!active && (
        <div className={styles.booking}>
  
  {/* LEFT CONTENT */}
  <div className={styles.bookingContent}>
    <h2>Plan Your Perfect Event</h2>
    <p>
      From weddings to private celebrations, we create unforgettable
      experiences tailored to your vision.
    </p>

    <div className={styles.actions}>
      <a
        href="https://wa.me/9196611111107"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.primaryBtn}
      >
        Book via WhatsApp
      </a>

      <button
        className={styles.secondaryBtn}
        onClick={() => navigate("/gallery")}
      >
        Explore Packages →
      </button>
    </div>

    <div className={styles.features}>
      <span>✨ Luxury Ambience</span>
      <span>🍽️ Premium Catering</span>
      <span>🎉 Custom Decorations</span>
      <span>📸 Event Management</span>
    </div>
  </div>

  {/* RIGHT VISUAL */}
  <div className={styles.visual}>
    🏨
  </div>

</div>
      )}

      {/* Expanded */}
      {active && (
  <div className={styles.expanded}>
    <h2>{active.toUpperCase()} EXPERIENCE</h2>

    {/* 🔥 DUMMY BOXES (BACK AGAIN) */}
    <div className={styles.gallery}>
      {[...Array(8)].map((_, i) => (
        <div key={i} className={styles.media}></div>
      ))}
    </div>

    <p className={styles.detail}>
      Experience premium {active} events with luxury decor,
      curated dining, and unforgettable ambience at The Aeris Hotel.
    </p>
  </div>
)}
    </div>
  );
};

export default Services;