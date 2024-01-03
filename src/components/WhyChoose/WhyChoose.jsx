import React, {useEffect} from 'react'
import styles from "./WhyChoose.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {BsFillPeopleFill,BsGraphUp, BsArrowRight} from 'react-icons/bs'
import {FaHandshake} from 'react-icons/fa'
import {MdGroups3} from 'react-icons/md'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom';



const featureData = [
  {
    icon: <BsGraphUp size={15} color='white' className={styles.iconimg}/>,
    heading: "Experience",
    desc: "With years of experience in the real estate industry, the Golden Woods Developers brings a wealth of...",
  },
  {
    icon: <BsFillPeopleFill size={15} color='white' className={styles.iconimg}/>,
    heading: "Client-Centric Focus",
    desc: "Your dreams and aspirations are at the heart of everything we do. We take the time to understand your...",
  },
  {
    icon: <AiOutlineCheckCircle size={20} color='white' className={styles.iconimg}/>,
    heading: "Tailored Solutions",
    desc: "Recognizing that each client is unique, we offer personalized solutions that align with your specific requirements...",
  },
  {
    icon: <FaHandshake size={15} color='white' className={styles.iconimg}/>,
    heading: "Transparent Communication",
    desc: "Trust is the cornerstone of our relationships. We pride ourselves on transparent and honest communication...",
  },
  {
    icon: <MdGroups3 size={20} color='white' className={styles.iconimg}/>,
    heading: "Passionate Team",
    desc: "Our success is driven by the passion and dedication of our team. From our sales executives to project managers...",
  },
  
];

const WhyChoose = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  },[]);

  return (
    <section className={`${styles.container}`}>
   
      <div className={styles.content}>
       
        <div className={styles.content_body}>
          <div>
          <header className={styles.header_y}>
              <h2 className={styles.heading_main}>Why choose us</h2>
              <p className={styles.headingtag}>
                  We don’t just meet standards, we set them. 
                  Our passion for excellence drives us to go above and beyond, ensuring that every project
                  – Big or Small, reflects our commitment to quality and innovation.
              </p>
            </header>
            <div className={styles.image_container}>

                <img src="/Images/Home/whychooseus.jpg" alt="" className={styles.image_section} />
                <img src="/Images/Home/banner_image.jpg" alt="" className={`${styles.image_section} ${styles.second_image}`} />
            </div>
          </div>
          <div className={styles.item_container}>
              <header className={styles.header}>
              <h2 className={styles.heading_main}>Why choose us</h2>
              <p className={styles.headingtag}>
                  We don’t just meet standards, we set them. 
                  Our passion for excellence drives us to go above and beyond, ensuring that every project
                  – Big or Small, reflects our commitment to quality and innovation.
              </p>
            </header>
            <div className={styles.items}>
              {featureData.map((data,index) => (
                <div className={styles.item} data-aos="fade-up"  data-aos-duration="700" data-aos-once >
               
               
                    <div className={styles.icon_container}>
                       {data.icon}
                   </div>
                    <div className={styles.content_text}>
                      <h3 className={styles.item_heading}>{data.heading}</h3>
                      <p className={styles.item_desc}>{data.desc}</p>
                      <Link to="/about" className={styles.readMore}>Read More <BsArrowRight/></Link>
                  </div>
               
                  
                </div>
              ))}
            </div>
          </div>
        </div>
          
        </div>
    
    </section>
  );
};

export default WhyChoose;
