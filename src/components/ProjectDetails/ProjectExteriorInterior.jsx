import React from 'react'
import styles from './ProjectExteriorInterior.module.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';

const ProjectExteriorInterior = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content_exterior}>
            <div className={styles.text_content}>
                <p className={styles.subhead}>Exterior</p>
                <h2 className={styles.head}>Human-Centered Design Friendly Spaces</h2>
                <p className={styles.info}>Flexible, Contemporary Spaces. We design and
                    service the next generation building. Our design
                    philosophy and continuous improvement
                    methodology aims to enhance the experience of
                    every user of our spaces</p>
            </div>
            <div className={styles.slider}>
            <Splide aria-label="My Favorite Images"
            options={{perPage:1}}>
                <SplideSlide>
                    <div className={styles.perSlide}>
                        <img src="/Images/Home/home_about.jpg" alt="Image 1"/>
                        <img src="/Images/Home/home_about.jpg" alt="Image 1"/>
                        <img src="/Images/Home/home_about.jpg" alt="Image 1"/>
                        <img src="/Images/Home/home_about.jpg" alt="Image 1"/>
                        <img src="/Images/Home/home_about.jpg" alt="Image 1"/>
                        <img src="/Images/Home/home_about.jpg" alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.perSlide}>
                        <img src="/Images/Home/home_about.jpg" alt="Image 1"/>
                        <img src="/Images/Home/home_about.jpg" alt="Image 1"/>
                        <img src="/Images/Home/home_about.jpg" alt="Image 1"/>
                        <img src="/Images/Home/home_about.jpg" alt="Image 1"/>
                        <img src="/Images/Home/home_about.jpg" alt="Image 1"/>
                        <img src="/Images/Home/home_about.jpg" alt="Image 1"/>
                    </div>
                </SplideSlide>
            </Splide>
            </div>
        </div>
        <div className={styles.content_interior}>
            <div className={styles.text_content}>
                <p className={styles.subhead}>Exterior</p>
                <h2 className={styles.head}>Human-Centered Design Friendly Spaces</h2>
                <p className={styles.info}>Flexible, Contemporary Spaces. We design and
                    service the next generation building. Our design
                    philosophy and continuous improvement
                    methodology aims to enhance the experience of
                    every user of our spaces</p>
            </div>
            <div className={styles.slider}>
            <Splide aria-label="My Favorite Images"
            options={{perPage:1}}>
                <SplideSlide>
                    <div className={styles.perSlide}>
                        <img src="/Images/Home/home_about.jpg" alt="Image 1"/>
                        <img src="/Images/Home/home_about.jpg" alt="Image 1"/>
                        <img src="/Images/Home/home_about.jpg" alt="Image 1"/>
                        <img src="/Images/Home/home_about.jpg" alt="Image 1"/>
                        <img src="/Images/Home/home_about.jpg" alt="Image 1"/>
                        <img src="/Images/Home/home_about.jpg" alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.perSlide}>
                        <img src="/Images/Home/home_about.jpg" alt="Image 1"/>
                        <img src="/Images/Home/home_about.jpg" alt="Image 1"/>
                        <img src="/Images/Home/home_about.jpg" alt="Image 1"/>
                        <img src="/Images/Home/home_about.jpg" alt="Image 1"/>
                        <img src="/Images/Home/home_about.jpg" alt="Image 1"/>
                        <img src="/Images/Home/home_about.jpg" alt="Image 1"/>
                    </div>
                </SplideSlide>
            </Splide>
            </div>
        </div>
    </section>
  )
}

export default ProjectExteriorInterior