import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import InfiniteSlider from "../components/InfiniteSlider/InfiniteSlider";
import ServicesPreview from "../components/ServicesPreview/ServicesPreview";
import ImageTrail from "../components/ImageTrail/ImageTrail";
import Testimonials from "../components/Testimonials/Testimonials";
import FAQ from "../components/FAQ/FAQ";
// import Footer from "../components/Footer/Footer";
import SEO from "../components/SEO/SEO";

<SEO
  title="The Aeris Hotel | Luxury Stay in Patna"
  description="Premium hotel in Patna offering luxury rooms, restaurant, and banquet for weddings, birthdays and events."
  url="https://yourdomain.com/"
/>

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <InfiniteSlider />
      <ServicesPreview />
      <ImageTrail />
      <Testimonials />
      <FAQ />
      {/* <Footer /> */}
    </>
  );
};

export default Home;