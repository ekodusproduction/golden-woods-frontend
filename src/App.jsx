import { useEffect, useState, useRef } from "react";
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
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";





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
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false)

  const toggleChatbot = () => {
    setIsChatbotOpen(true);
  };
  const formOpenHandler = () => {
    setFormOpen(true);
    document.body.style.overflow = "hidden"
  }
  const formCloseHandler = () => {
    setFormOpen(false);
    document.body.style.overflow = "auto"
  }
      const form = useRef();
      
      const formSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
            emailjs.sendForm('service_cs5vlng', 'template_74pnquo', form.current, 'hXVjB0wh5qLyBUqMq')
                .then((result) => {
                  setSubmitted(true);
                }, (error) => {
                    console.log(error.text);
                })
                .finally(() => {
                  setSubmitting(false); // Re-enable the button and revert text
                });
      }
  return (
    <>
   
    <Router>
      <ScrollToTop/>
      <ParallaxProvider>
        <div className='chatbot_container'>
            {isChatbotOpen && (
              <div className="chatbot">
                <Chatbot setIsChatbotOpen={setIsChatbotOpen}/>
            </div>
          )}
          <button onClick={toggleChatbot} className="chatbot_btn">Chat with us</button>
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
        <form action="" ref={form} onSubmit={formSubmit} >
          <input type="text" placeholder="Name" name="name" required/>
          <input type="text" placeholder="Email" name="email" required />
          <input type="text" placeholder="Mobile Number" name="phone" required />
         <textarea name="message" id="" cols="30" rows="10" placeholder="Message" required></textarea>
         {submitted && <p style={{fontSize:'13px'}}>*Form has been successfully submitted</p>}
         <button className="special_button" disabled={submitting}  style={submitting ? { cursor: 'not-allowed', opacity: 0.7 } : {}} category={'primary'} type={'submit'} >
         {submitting ? 'Submitting...' : 'Submit'}
         </button>
          
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
