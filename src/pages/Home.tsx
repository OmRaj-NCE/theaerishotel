import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import InfiniteSlider from "../components/InfiniteSlider/InfiniteSlider";
import ServicesPreview from "../components/ServicesPreview/ServicesPreview";
import ImageTrail from "../components/ImageTrail/ImageTrail";
import Testimonials from "../components/Testimonials/Testimonials";
import FAQ from "../components/FAQ/FAQ";
// import Footer from "../components/Footer/Footer";
import SEO from "../components/SEO/SEO";
import EnquiryForm from "../components/EnquiryForm/EnquiryForm";

<SEO
  title="The Aeris Hotel | Luxury Stay in Patna"
  description="Luxury hotel in Patna offering premium rooms, weddings, events and banquet services."
  url="https://theaerishotel.vercel.app/"
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
      <EnquiryForm />
      {/* <Footer /> */}
    </>
  );
};

export default Home;