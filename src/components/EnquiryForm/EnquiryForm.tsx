import { useState } from "react";
import styles from "./EnquiryForm.module.css";

const PHONE = "919661111107";

const EnquiryForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: "",
    room: "",
    event: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = encodeURIComponent(
`New Booking Enquiry:

Name: ${form.name}
Phone: ${form.phone}

Check-in: ${form.checkin}
Check-out: ${form.checkout}

Guests: ${form.guests}
Room: ${form.room}
Event: ${form.event}

Message: ${form.message}`
    );

    window.open(`https://wa.me/${PHONE}?text=${text}`, "_blank");
  };

  return (
    <div className={styles.wrapper}>
      <h2>Check Availability</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>

          <input
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="checkin"
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="checkout"
            onChange={handleChange}
            required
          />

          <input
            name="guests"
            placeholder="Number of Guests"
            onChange={handleChange}
          />

          <select name="room" onChange={handleChange}>
            <option value="">Select Room Type</option>
            <option value="Deluxe Room">Deluxe Room</option>
            <option value="Premium Room">Premium Room</option>
            <option value="Suite">Suite</option>
            <option value="Banquet Booking">Banquet Booking</option>
          </select>

          <select name="event" onChange={handleChange}>
            <option value="">Select Event Type</option>
            <option value="Wedding">Wedding</option>
            <option value="Birthday">Birthday</option>
            <option value="Corporate">Corporate</option>
          </select>

          <textarea
            name="message"
            placeholder="Additional details..."
            onChange={handleChange}
          />

        </div>

        <button type="submit">Check Availability →</button>
      </form>
    </div>
  );
};

export default EnquiryForm;