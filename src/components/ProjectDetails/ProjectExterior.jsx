import React from 'react'
import styles from './ProjectExterior.module.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import { publicURL } from '../../api/axiosConfig';

const ProjectExterior = ({exteriorImages}) => {
    const newexteriorImages = Array.from({ length: Math.ceil(exteriorImages.length / 6) }, (_, index) =>
    exteriorImages.slice(index * 6, (index + 1) * 6)
  );

 
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
                {newexteriorImages.map(items => (
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

export default ProjectExterior