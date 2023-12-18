import React from 'react'
import styles from './Header.module.css'
import { ParallaxBanner , ParallaxBannerLayer} from 'react-scroll-parallax';

const Header = ({title}) => {
  return (
    <ParallaxBanner style={{height:'60vh'}} >
      <ParallaxBannerLayer image='/Images/Home/banner_image.jpg' speed={-5} scale={[1, 1.5]} translateY={-30}  />
      <ParallaxBannerLayer>
      <div className={styles.header}>
          <h2>{title}</h2>
      </div>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  )
}

export default Header