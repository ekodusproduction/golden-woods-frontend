import React from 'react'
import styles from './MissionAndVision.module.css'
import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im'
import Button from '../Button/Button'

const MissionAndVision = () => {
  return (
    <div className={styles.container} >
        <div className={styles.mission}>
            <div className={styles.main_content}>
                <div className={styles.header}>
                    <h2 className={styles.header_main}>Our Mission</h2>
                   
                </div>
                <div className={styles.main_body}>
                    <div className={styles.subheader_container}>
                        <span><ImQuotesLeft color='#e1ad01'/></span>
                        <p>Empowering Dreams, Building Futures</p>
                        <span><ImQuotesRight  color='#e1ad01'/></span>
                    </div>
                    <p>Our Mission is to be a beacon of Trust and Innovation in the real estate industry. We are dedicated to creating exceptional experiences for our clients by delivering unparalleled service, fostering lasting relationships and embracing cutting-edge technology.</p>
                    <br />
                    <p>Guided by Integrity, Transparency and a Commitment to Excellence, we strive to exceed expectations in every transaction. Our team of skilled professionals work tirelessly to transform dreams into reality, helping individuals and families find their ideal homes and investors secure lucrative opportunities.</p>

                </div>
                <Button type='primary' link="/about">Read More</Button>
            </div>
            <div className={styles.image}>
                <img src="/Images/Home/mission_image.JPG" className={styles.image_item} alt="" />
            </div>
        </div>

        {/* Vision */}
        <div className={styles.vission}>
            <div className={styles.main_content}>
                <div className={styles.header}>
                    <h2 className={styles.header_main}>Our Vision</h2>
                   
                </div>
                <div className={styles.main_body}>
                    <div className={styles.subheader_container}>
                        <span><ImQuotesLeft color='#e1ad01'/></span>
                        <p>Inspired Living, Timeless Design</p>
                        <span><ImQuotesRight  color='#e1ad01'/></span>
                    </div>
                    <p>We believe in creating spaces that go beyond the ordinary. Our vision is to craft environments that inspire, uplift and stand the test of time. Each development is a testament to our commitment to excellence in design and functionality.</p>
                    <br />
                    <div className={styles.subheader_container}>
                        <span><ImQuotesLeft color='#e1ad01'/></span>
                        <p>Sustainable Futures</p>
                        <span><ImQuotesRight  color='#e1ad01'/></span>
                    </div>
                    
                    <p>Environmental responsibility is at the core of our ethos. We integrate sustainable practices into every aspect of our developments, ensuring that we are not only build for today but also contribute to a greener and more sustainable future.</p>

                </div>
                <Button type='primary' link="/about">Read More</Button>
            </div>
            <div className={styles.image}>
                <img src="/Images/Home/vision_image.JPG" className={styles.image_item} alt="" />
            </div>
        </div>

    </div>
  )
}

export default MissionAndVision