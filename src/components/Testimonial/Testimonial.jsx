import React, {useEffect} from 'react'
import styles from './Testimonial.module.css'
import {ImQuotesLeft} from 'react-icons/im'
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {

    useEffect(() => {
        AOS.init({ duration: 1500 });
      },[]);

  return (
    <div className={`${styles.testimony_container} section_gap`}>
        <div className={styles.testimony_left_container}>
            <div className={styles.testimony_left}>
                <h2 className={styles.header}>What Our Clients Say!</h2>
                <p className={styles.subheader}>You can use these sections to highlight the features of heading.
                    Use these paragraphs to focus on the topic you want. 
                    Make sure you keep it short and attractive.</p>
            </div>
            <div className={`${styles.testimony_card} ${styles.testimony_card_left}`} data-aos="fade-up-right" data-aos-once data-aos-delay='200'>
                <img src="/image/testimonials1.jpg" className={styles.testimony_image} alt="" />
                <div className={styles.testimony_details}>
                    <ImQuotesLeft color='#FFC000' size={30}/> 
                    <p className={styles.review_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Aliquid debitis officiis totam beatae doloribus sunt impedit odit delectus fugiat ullam?
                    </p>
                    <div className={styles.testimony_person}>
                        <p>Rituraj Pathak</p>
                        <p className={styles.review_desg}>Frontend Developer</p>
                    </div>

                </div>
            </div>
        </div>
        <div className={styles.testimony_right}>
        <div className={styles.testimony_card} data-aos="fade-down-left" data-aos-once data-aos-delay='200'>
                <img src="/image/testimonials2.jpg" className={styles.testimony_image} alt="" />
                <div className={styles.testimony_details}>
                    <ImQuotesLeft color='#FFC000' size={30}/> 
                    <p className={styles.review_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Aliquid debitis officiis totam beatae doloribus sunt impedit odit delectus fugiat ullam?
                    </p>
                    <div className={styles.testimony_person}>
                        <p>Rituraj Pathak</p>
                        <p className={styles.review_desg}>Frontend Developer</p>
                    </div>

                </div>
            </div>
            <div className={styles.testimony_card} data-aos="fade-up-left" data-aos-once data-aos-delay='200'>
                <img src="/image/testimonial3.jpg" className={styles.testimony_image} alt="" />
                <div className={styles.testimony_details}>
                    <ImQuotesLeft color='#FFC000' size={30}/> 
                    <p className={styles.review_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Aliquid debitis officiis totam beatae doloribus sunt impedit odit delectus fugiat ullam?
                    </p>
                    <div className={styles.testimony_person}>
                        <p>Rituraj Pathak</p>
                        <p className={styles.review_desg}>Frontend Developer</p>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Testimonial