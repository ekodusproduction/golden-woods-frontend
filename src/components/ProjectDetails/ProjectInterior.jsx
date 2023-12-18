import React from 'react'
import styles from './ProjectInterior.module.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import { publicURL } from '../../api/axiosConfig';

const ProjectInterior = ({interiorImages}) => {
    const newinteriorImages = Array.from({ length: Math.ceil(interiorImages.length / 6) }, (_, index) =>
    interiorImages.slice(index * 6, (index + 1) * 6)
  );

  return (
    <section className={styles.container}>
    <div className={styles.content_interior}>
        <div className={styles.text_content}>
            <p className={styles.subhead}>Interior</p>
            <h2 className={styles.head}>Our Interior Gallery awaits your inspiration.</h2>
            <p className={styles.info}>Embark on a visual journey through our expansive Interior Gallery, where every image narrates the story of impeccable design, luxury, and comfort. Discover a symphony of elegance, innovation, and timeless style that awaits in every corner of your dream home</p>
        </div>
        <div className={styles.slider}>
        <Splide aria-label="My Favorite Images"
        options={{perPage:1}}>
          {newinteriorImages.map(items => (
                    <SplideSlide>
                    <div className={styles.perSlide}>
                        {items.map(item=> (
                             <img src={`${publicURL}${item.image}`} key={item.id} alt="Image 1"/>
                        ))}
                       
                    </div>
                </SplideSlide>
                ))}
        </Splide>
        </div>
    </div>
</section>
  )
}

export default ProjectInterior