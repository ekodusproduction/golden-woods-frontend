import React, {useEffect} from 'react'
import styles from "./GreatSpaces.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from '../Button/Button';

const GreatSpaces = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  },[]);

  return (
    <section className={`${styles.greatSpacesSection} `}>
      <article className={styles.contentContainer} data-aos="fade-right" data-aos-duration="700" data-aos-once>
        <h2 className={styles.sectionHeading}>
          Great Spaces for Perfection <br /> & Class at Best Prices
        </h2>
        <p className={styles.description}>
          Experience the pinnacle of luxury living with The Golden Woods
          Developers. With a deep-rooted passion for real estate, a dedication
          to quality and a focus on sustainable development, we have become a
          trendsetter in the Real Estate Industry across the Northease, and have
          always focused on delivering the finest residential developments.
          <br />
        </p>
        <div>
          <Button type="primary" link="/about">Know More</Button>
        </div>
        <div>
          <h4 className={styles.call}>Call Us Today</h4>
          <p className={styles.number}>+91 84484 44840</p>
        </div>
      </article>
      
      
      <div className={styles.borderContainer } data-aos="fade-left" data-aos-duration="700" data-aos-once>
        <img src="/Images/Home/home_about.jpg" alt='' className={styles.section_image} /> 
      </div>
    </section>
  );
};

export default GreatSpaces;
