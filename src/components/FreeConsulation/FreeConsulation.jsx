import React,{useEffect} from "react";
import styles from "./FreeConsulation.module.css";
import Button from "../Button/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import { ParallaxBanner , ParallaxBannerLayer} from 'react-scroll-parallax';

const FreeConsulation = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  },[]);

  return (
    <ParallaxBanner style={{height:'100%'}} >
        <ParallaxBannerLayer image="/Images/Home/banner_image.jpg" speed={-5} scale={[1, 1.5]} translateY={-30}  />
        <section className={styles.consulationSection}>
          <article className={styles.contentContainer}>
            <h2 className={styles.sectionHeading} data-aos="fade-right" data-aos-once>
              Unlock Your Dream <br /> Home with a Free Consulation!
            </h2>
            <p className={styles.description} data-aos="fade-left" data-aos-once >
              Our expert real estate team is here to guide you every step of the
              way. Get personalized advice tailored to your unique needs. Schedule
              Your Free Consulation Now!
            </p>
            <div data-aos="fade-right" data-aos-once>
              <Button type="primary" link="/comingsoon" >
                Book an Appointment
              </Button>
            </div>
          </article>
          <div className={styles.backgroundOverlay}></div>
        </section>
     </ParallaxBanner>
  );
};

export default FreeConsulation;
