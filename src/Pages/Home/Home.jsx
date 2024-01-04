import React, {useEffect} from 'react'
import styles from "./Home.module.css";
import Button from "../../components/Button/Button";
import GreatSpaces from "../../components/GreatSpaces/GreatSpaces";
import FreeConsulation from "../../components/FreeConsulation/FreeConsulation";
import WhyChoose from '../../components/WhyChoose/WhyChoose'
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonial from '../../components/Testimonial/Testimonial';
import Blogs from '../../components/Blogs/Blogs';
import Footer from '../../components/Footer/Footer';
import MissionAndVision from '../../components/MissionAndVision/MissionAndVision';
import OurExpertise from '../../components/OurExpertise/ourExpertise';
import Navbar from '../../components/Navbar/Navbar';
import RecentProjects from '../../components/RecentProjects/RecentProjects';

import { ParallaxBanner , ParallaxBannerLayer} from 'react-scroll-parallax';
import Safety from '../../components/SafetySection/Safety';



const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  },[]);
  
  return (
    <>
    <Navbar/>
          <section className={styles.homeContainer}>
          <video autoPlay muted loop  className={styles.video}>
            <source src="/dummy_back_video.mp4" type="video/mp4"/>
          </video>
            {/* <div className={styles.backgroundOverlay}></div> */}
            <article className={styles.heroContent} >
              <h1 className={styles.heading}  data-aos="fade-right" data-aos-once  data-aos-duration="900"  >
                LEADERS IN QUALITY CONSTRUCTION AND INFRASTRUCTURE
              </h1>
              <p className={styles.heroTagline} data-aos="fade-right" data-aos-once  data-aos-duration="900" >
                Welcome to the Golden Woods Developers, Where We Build your Dream
                Home
              </p>
              <div className={styles.btnContainer}  data-aos="fade-right" data-aos-once  data-aos-duration="900" >
                <Button type="primary" link="/comingsoon">Get Free Quote</Button>
                <Button link="/comingsoon">Get in Touch</Button>
              </div>
            </article>
          </section>
         
        
              <GreatSpaces />
              <FreeConsulation />
              <WhyChoose/>
              <Safety/>
              <RecentProjects/>
              <MissionAndVision/>
              <OurExpertise/>
              <Testimonial/>
              {/* <Blogs/> */}
              <div className={styles.map}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57296.498533632475!2d91.70857012167967!3d26.16311470000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a590fab4a9dff%3A0xab8952c09ed14a3b!2sThe%20Golden%20Woods%20Group!5e0!3m2!1sen!2sin!4v1697608009012!5m2!1sen!2sin" width="600" height="450" className={styles.map_item} allowfullscreen="" loading="lazy" ></iframe>
              </div>
     
      <Footer/>
    </>
  );
};

export default Home;
