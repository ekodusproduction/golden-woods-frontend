import React from 'react'
import styles from './ProjectGallery.module.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';

const ProjectGallery = () => {
  return (
    <section className={styles.container}>
        <div className={styles.header}>
            <h2>For Those Who Know How To Choose</h2>
            <p>Windows, skylights, vents, and glass portions of doors helps to control solar heat loss and gains runway heading towards.</p>
        </div>
        <div className={styles.content}>
        <Splide aria-label="My Favorite Images" 
        options={{
            perPage: 3,
            gap: '2rem',
            breakpoints: {
                700: {
                    perPage: 2,
                },
                576: {
                    perPage: 1,
                },
          }
        }
        }>
            <SplideSlide>
                <img src="/Images/floorplan.jpg" className={styles.image} alt="Image 1"/>
            </SplideSlide>
            <SplideSlide>
                <img src="/Images/floorplan.jpg" className={styles.image} alt="Image 2"/>
            </SplideSlide>
            <SplideSlide>
                <img src="/Images/floorplan.jpg" className={styles.image} alt="Image 2"/>
            </SplideSlide>
            <SplideSlide>
                <img src="/Images/floorplan.jpg" className={styles.image} alt="Image 2"/>
            </SplideSlide>
            <SplideSlide>
                <img src="/Images/floorplan.jpg" className={styles.image} alt="Image 2"/>
            </SplideSlide>
        </Splide>

        </div>
    </section>
  )
}

export default ProjectGallery