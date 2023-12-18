import React from 'react'
import styles from './ProjectConfigurations.module.css'
import Button from '../Button/Button'
import { ParallaxBanner , ParallaxBannerLayer} from 'react-scroll-parallax';

const ProjectConfigurations = ({configuration}) => {
    console.log(configuration)
  return (
    <ParallaxBanner   style={{ height: '450px', position: 'relative' }} >
    <ParallaxBannerLayer image={`/public/Images/home_consultation.JPG`} speed={-5} scale={[1, 1.5]} translateY={-30}  />
    <ParallaxBannerLayer>
    <section className={styles.container}>
        <h2>Project Configutrations</h2>
        <div className={styles.content}>
            {configuration.map((item,index)=> (
                <div className={styles.content_card}>
                <h3>{item.type}</h3>
                <div className={styles.content_card_child}>
                    <p>Carpet (Sq. Ft)</p>
                    <p><b>{item.size} sq. ft.</b></p>
                </div>
                <Button type={'btnPrimary'}>Check for Price</Button>
            </div>

            ))}
            
           
        </div>
    </section>
    </ParallaxBannerLayer>
    </ParallaxBanner>
  )
}

export default ProjectConfigurations