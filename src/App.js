import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Cart from "./components/CartExtraPage/Cart";
import Navigation from "./components/NavigationBar/Navigation";
import HeroSection from "./components/HomeSection/HeroSection";
import InfoSection from "./components/FaqSection/InfoSection";
import ContactSection from "./components/ContactFormSection/ContactSection";
import LoginSection from "./components/LoginSection/LoginSection";
import ProductSection from "./components/ProductSection/ProductSection";
import AboutUs from "./components/AboutUsSection/AboutUsSection";
import FaqSection from "./components/FaqSection/FaqSection";
import Impressum  from "./components/ImpressumExtraPage/Impressum";

import "./App.scss";

function App() {
  return (
      <div className="App">
          <Navigation/>
          <HeroSection />
          <ProductSection />
          <InfoSection />
          <LoginSection />
          <AboutUs />
          <ContactSection />
          <FaqSection />
          <Impressum />
      </div>
<<<<<<< HEAD
    </Router>
  
=======
>>>>>>> 18054d798a54b6dd63e3e40b7e84004e7eb6e5d4

  );
}

export default App; 

