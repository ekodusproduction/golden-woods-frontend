import React from 'react'
import styles from './Safety.module.css'
import { ParallaxBanner , ParallaxBannerLayer} from 'react-scroll-parallax';

const Safety = () => {
  return (
    <ParallaxBanner style={{height:'300px'}} >
        <ParallaxBannerLayer image="/Images/Home/banner_image.jpg" speed={-5} scale={[1, 1.5]} translateY={-30}  />
        <ParallaxBannerLayer>
        <div className={styles.safety}>
        <div className={styles.backgroundOverlay}></div>
            <h2>Safety . Technology</h2>
            <h2>Eco Friendly . Luxury . Smart</h2>
        </div>
        </ParallaxBannerLayer>
  </ParallaxBanner>
  )
}

export default Safety