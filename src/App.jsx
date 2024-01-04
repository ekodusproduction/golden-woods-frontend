import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route , useLocation} from "react-router-dom";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import Property from "./Pages/Property/Property";
import PropertyDetails from "./Pages/PropertyDetails/PropertyDetails";
import Blogs from "./Pages/Blogs/Blogs";
import { ParallaxProvider } from 'react-scroll-parallax';

import Chatbot from "./components/Chatbot/Chatbot.jsx"; 
import Button from "./components/Button/Button.jsx";
import { IoClose } from "react-icons/io5";





const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when route changes
  }, [pathname]);

  return null;
};

function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isFormOpen, setFormOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen((prev) => !prev);
  };
  const formOpenHandler = () => {
    setFormOpen(true);
    document.body.style.overflow = "hidden"
  }
  const formCloseHandler = () => {
    setFormOpen(false);
    document.body.style.overflow = "auto"
  }
  return (
    <>
   
    <Router>
      <ScrollToTop/>
      <ParallaxProvider>
        <div className='chatbot_container'>
            {isChatbotOpen && (
              <div className="chatbot">
                <Chatbot/>
            </div>
          )}
          <button onClick={toggleChatbot} className="chatbot_btn"><img src="/icons/chatbot.png" alt="" /></button>
      </div>
      <div className="contact_us_fixed">
        <button className="public_form_btn" onClick={formOpenHandler}>Contact Us</button>
      </div>
      {isFormOpen &&  
      <>
       <div className="form_overlay" onClick={formCloseHandler}></div>
      <div className="public_form">
        <div className="public_form_header">
          <h3>Please fill in the details</h3>
          <button onClick={formCloseHandler}><IoClose color="white" size={25}/></button>
        </div>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Mobile Number" />
         <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
         <Button category={'primary'} type={'submit'} >Submit</Button>
          
        </form>
      </div>
      </>
       }
    
      <Routes>
      
            <Route path='/' element={<Home setFormOpen={setFormOpen} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/property" element={<Property />} />
            <Route path="/propertydetails" element={<PropertyDetails setFormOpen={setFormOpen} />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/comingsoon" element={<ComingSoon />} />
         
      </Routes>

      </ParallaxProvider>
    </Router>
    </>
  );
}

export default App;
