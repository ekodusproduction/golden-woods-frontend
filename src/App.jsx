import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route , useLocation} from "react-router-dom";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import Property from "./Pages/Property/Property";
import PropertyDetails from "./Pages/PropertyDetails/PropertyDetails";
import Blogs from "./Pages/Blogs/Blogs";
import { ParallaxProvider } from 'react-scroll-parallax';



const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when route changes
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
   
    <Router>
      <ScrollToTop/>
      <ParallaxProvider>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/property" element={<Property />} />
          <Route path="/propertydetails" element={<PropertyDetails />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
      </Routes>
      </ParallaxProvider>
    </Router>
    </>
  );
}

export default App;
