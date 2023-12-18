import React,{useState,useEffect} from 'react'
import styles from './ProjectGallery.module.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import {publicURL} from '../../api/axiosConfig'
const ProjectGallery = ({archImages}) => {

  return (
    <section className={styles.container}>
        <div className={styles.header}>
            <h2>Architectural Images</h2>
            <p>Isometric View / Typical Floor Plan / Master Plan</p>
        </div>
        <div className={styles.content}>
        <Splide aria-label="Architectural Images" 
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
            {archImages.map((item,index)=>(
                <SplideSlide key={item.id}>
                    <img src={`${publicURL}${item.image}`} className={styles.image} alt="architectural image"/>
                </SplideSlide>
            ))}
        </Splide>

        </div>
    </section>
  )
}

export default ProjectGallery