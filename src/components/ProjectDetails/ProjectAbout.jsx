import React,{useEffect} from 'react'
import styles from './ProjectAbout.module.css'
import { publicURL } from '../../api/axiosConfig'
import AOS from "aos";
import "aos/dist/aos.css";


const ProjectAbout = ({overviewHeading,overviewContent,overviewFooter,mainImage,secondaryImage}) => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  },[]);
  return (
    <section className={styles.container}>
        <div className={styles.content} data-aos="fade-right" data-aos-duration="500" data-aos-once>
            <h3 className={styles.content_header}>{overviewHeading}</h3>
            <p className={styles.content_desc}>{overviewContent}</p>
            <h3 className={styles.content_tag}>{overviewFooter}</h3>
        </div>
        <div className={styles.images} data-aos="fade-left" data-aos-duration="500" data-aos-once>
            <img src={`${publicURL}${mainImage}`} alt="" className={styles.main_image} />
            <img src={`${publicURL}${secondaryImage}`} alt="" className={styles.secondary_image} />
        </div>

    </section>
  )
}

export default ProjectAbout