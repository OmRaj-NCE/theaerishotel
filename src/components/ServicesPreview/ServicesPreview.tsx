import styles from "./ServicesPreview.module.css";

const services = [
  {
    title: "Luxury Rooms",
    desc: "Comfort meets premium living",
  },
  {
    title: "Restaurant",
    desc: "Fine dining experience",
  },
  {
    title: "Banquet",
    desc: "Perfect for weddings & events",
  },
];

const features = [
  "✨ Luxury Ambience",
  "🍽️ Premium Catering",
  "🎉 Custom Decorations",
  "📸 Event Management",
];
const ServicesPreview = () => {
  return (
    <section className={styles.services}>
      
      {/* 🔹 Header */}
      <div className={styles.header}>
        <h2>Our Services</h2>
        <p>
          Experience comfort, elegance, and celebration—all in one place.
        </p>
      </div>

      {/* 🔹 Service Cards */}
      <div className={styles.cards}>
        {services.map((service, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.cardInner}>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 💰 Booking CTA Section */}
      <div className={styles.booking}>
        <div className={styles.bookingContent}>
          
          <h2>Plan Your Perfect Event</h2>
          <p>
            From weddings to private celebrations, we create unforgettable
            experiences tailored to your vision.
          </p>

          {/* Actions */}
          <div className={styles.actions}>
            <a
              href="https://wa.me/9196611111107"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryBtn}
            >
              Book via WhatsApp
            </a>

            <button className={styles.secondaryBtn}>
              Explore Packages
            </button>
          </div>

          {/* Features */}
          <div className={styles.features}>
            {features.map((item, i) => (
              <span key={i} className={styles.feature}>
                {item}
              </span>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default ServicesPreview;