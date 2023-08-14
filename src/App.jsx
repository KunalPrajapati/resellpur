import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import logo from './assets/logo-rsp.png';
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";

const App = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen">
      <div className="bg-[#a8a3d2]">
        <Navbar />
      </div>
      <div className="logo-desc flex flex-col lg:flex-row justify-center items-center w-full px-4 py-8 mx-auto lg:w-[1080px]">
        <img src={logo} alt="" className="h-[120px] w-[350px] lg:ml-14 mb-6 lg:mb-0" />
        <p className="mt-6 lg:mt-0 lg:max-w-md lg:ml-10 text-center lg:text-left">
          🌟 Resellpur: Simplifying Trades. Secure. User-friendly. From pre-loved treasures to sustainability, we're reshaping commerce. Join us today! 🌎♻️
        </p>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {location.pathname === "/" && <FAQs />}
      <Footer />
    </div>
  );
};

export default App;
