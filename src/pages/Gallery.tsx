import styles from "./Gallery.module.css";
import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SEO from "../components/SEO/SEO";

// 🔥 IMPORT IMAGES
import img1 from "../assets/gallery/images/img1.jpg";
import img2 from "../assets/gallery/images/img2.jpg";
import img3 from "../assets/gallery/images/img3.jpg";
import img4 from "../assets/gallery/images/img4.jpg";
import img5 from "../assets/gallery/images/img5.jpg";
import img6 from "../assets/gallery/images/img6.jpg";
import img7 from "../assets/gallery/images/img7.jpg";
import img8 from "../assets/gallery/images/img8.jpg";
import img9 from "../assets/gallery/images/img9.jpg";
import img10 from "../assets/gallery/images/img10.jpg";
import img11 from "../assets/gallery/images/img11.jpg";
import img12 from "../assets/gallery/images/img12.jpg";
import img13 from "../assets/gallery/images/img13.jpg";
import img14 from "../assets/gallery/images/img14.jpg";
import img15 from "../assets/gallery/images/img15.jpg";
// ... continue till img40
// import img40 from "../assets/gallery/images/img40.jpg";

// 🔥 IMPORT VIDEOS
import vid1 from "../assets/gallery/videos/vid1.mp4";
import vid2 from "../assets/gallery/videos/vid2.mp4";
import vid3 from "../assets/gallery/videos/vid3.mp4";
import vid4 from "../assets/gallery/videos/vid4.mp4";
import vid5 from "../assets/gallery/videos/vid5.mp4";
import vid6 from "../assets/gallery/videos/vid6.mp4";
// ... continue till vid10
// import vid10 from "../assets/gallery/videos/vid10.mp4";
<SEO
  title="Gallery | The Aeris Hotel"
  description="View our luxury hotel gallery, weddings, rooms and event experiences."
  url="https://theaerishotel.vercel.app/gallery"
/>
const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15
];

const videos = [
  vid1, vid2, vid3, vid4, vid5,
  vid6
];

const Gallery = () => {
  const [activeMedia, setActiveMedia] = useState<string | null>(null);

  return (
    <section className={styles.gallery}>

      <h1>Our Experience</h1>

      {/* 🎥 CINEMATIC VIDEO STRIP */}
      <div className={styles.videoStrip}>
        {videos.map((vid, i) => (
          <video
            key={i}
            src={vid}
            autoPlay
            muted
            loop
            playsInline
            onClick={() => setActiveMedia(vid)}
          />
        ))}
      </div>

      {/* 🖼️ MASONRY GRID */}
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}>
        <Masonry gutter="20px">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              className={styles.image}
              loading="lazy"
              onClick={() => setActiveMedia(img)}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>

      {/* 🔥 LIGHTBOX */}
      {activeMedia && (
        <div className={styles.lightbox} onClick={() => setActiveMedia(null)}>
          {activeMedia.endsWith(".mp4") ? (
            <video src={activeMedia} autoPlay controls />
          ) : (
            <img src={activeMedia} />
          )}
        </div>
      )}

    </section>
  );
};

export default Gallery;