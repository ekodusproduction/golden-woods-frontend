import React from 'react'
import styles from './ProjectConfigurations.module.css'
import Button from '../Button/Button'
import { ParallaxBanner , ParallaxBannerLayer} from 'react-scroll-parallax';

const ProjectConfigurations = ({configuration,setFormOpen}) => {
    const formOpenHandler = () => {
        setFormOpen(true);
        document.body.style.overflow = "hidden"
      }
      console.log(configuration)

  return (
    <>
    {configuration &&  <section className={styles.container}>
        <div className={styles.header}>
            <h2><span>Project</span><span>Configuration</span></h2>
            <p>Seamless setup, efficient workflows—empowering your project with optimal configuration for success and growth.</p>
            <button onClick={formOpenHandler} className='special_button'>Check for Price</button>
        </div>
        <div className={styles.items}>
      
            <div className={styles.item} >
                <div className={styles.overlay}></div>
                <p className={styles.item_heading}>{configuration[0].type}</p>
                <img src="/static_files/1bhk.jpg" alt="1bhk image" loading='lazy'/>
                <div className={styles.item_desc}>
                    <p>Carpet (Sq. Ft)</p>
                    <p><b>{configuration[0].size} sq. ft.</b></p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.overlay}></div>
                <p className={styles.item_heading}>{configuration[1].type}</p>
                <img src="/static_files/2bhk.jpg" alt="2 bhk image" loading='lazy' />
                <div className={styles.item_desc}>
                    <p>Carpet (Sq. Ft)</p>
                    <p><b>{configuration[1].size} sq. ft.</b></p>
                </div>
            </div>

            <div className={styles.item} >
                <div className={styles.overlay}></div>
                <p className={styles.item_heading}>{configuration[2].type}</p>
                <img src="/static_files/3bhk.jpg" alt="3 bhk image" loading='lazy' />
                <div className={styles.item_desc}>
                    <p>Carpet (Sq. Ft)</p>
                    <p><b>{configuration[2].size} sq. ft.</b></p>
                </div>
            </div>
      
          
          
        </div>
    </section> }
   
    </>
  
  )
}

export default ProjectConfigurations