import React, {useState,useEffect} from 'react'
import styles from './RecentProjects.module.css'
import Button from '../Button/Button'
import Modal from 'react-modal'
import {AiOutlineClose} from 'react-icons/ai'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { publicURL } from '../../api/axiosConfig'
import axiosConfig from '../../api/axiosConfig'

// import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/sea-green';



const RecentProjects = () => {
  const [allProjects, setAllProjects] = useState([]);

  useEffect(()=> {
    axiosConfig.get('/project/list')
    .then(response => {
      const responseData = response.data;
      setAllProjects(responseData.data.data)
    })

  },[])


  return (
    <div className={`${styles.container} `}>
    
      <div className={`${styles.header}`} data-aos="fade-right"  data-aos-duration="700" data-aos-once >
         
          <h2 className={styles.heading}>Our Latest projects</h2>
          <p className={styles.header_desc}>Explore The Goldenwoods' Latest Projects: Setting New Standards in Real Estate Innovation. Discover Exceptional Design, Sustainable Living, and Unmatched Luxury Redefining Modern Living Spaces.</p>
          <Button type='primary' link="/property">Check all projects</Button>
      </div>
      <div className={styles.project_container} data-aos="fade-left"  data-aos-duration="700" data-aos-once >
      <Splide aria-label="My Favorite Images"  style={{padding: 0}}  options={{
    perPage: 2,
    breakpoints: {
      756: {
        perPage: 1,
      },
    },
    pagination:false
  //  arrows:false,

  }} >
      {allProjects.map(project=>(
         <SplideSlide>
         <div className={styles.project}>
           <img src={`${publicURL}/${project.projectImage1}`} className={styles.project_image} alt="Image 1"/>
           <div className={styles.project_desc}>
             <h3 className={styles.project_name}>{project.projectName}</h3>
             <Button type='primary' link={`/propertydetails?id=${project.id}`}>Know More </Button>
           </div>
         </div>
       </SplideSlide>
      ))}
        
         
      </Splide>
      </div>
            
          
      
    </div>
  )
}
export default RecentProjects