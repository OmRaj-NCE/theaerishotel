import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar/Navbar";
import WhatsAppFloat from "./components/WhatsAppFloat/WhatsAppFloat";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
        <WhatsAppFloat />
      <Footer/>
    </>
  );
}

export default App;