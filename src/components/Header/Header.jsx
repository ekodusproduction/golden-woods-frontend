import React from 'react'
import styles from './Header.module.css'
import { ParallaxBanner , ParallaxBannerLayer} from 'react-scroll-parallax';

const Header = ({title}) => {
  return (
  <div className={styles.header_container}>
        <video autoPlay muted loop  className={styles.video}>
            <source src="/dummy_back_video.mp4" type="video/mp4"/>
        </video>
        <div className={styles.header}>
          <h2>{title}</h2>
        </div>
  </div>
      
      
  )
}

export default Header