import React, {useState} from 'react'
import styles from './RecentProjects.module.css'
import Button from '../Button/Button'
import Modal from 'react-modal'
import {AiOutlineClose} from 'react-icons/ai'
import { Splide, SplideSlide } from '@splidejs/react-splide';

// import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/sea-green';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    background: "rgba(0,0,0,0.4)"
  }
};

const RecentProjects = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    console.log('Hello')
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <div className={`${styles.container} `}>
    
      <div className={`${styles.header}`}>
         
          <h2 className={styles.heading}>Our Latest projects</h2>
          <p className={styles.header_desc}>Explore The Goldenwoods' Latest Projects: Setting New Standards in Real Estate Innovation. Discover Exceptional Design, Sustainable Living, and Unmatched Luxury Redefining Modern Living Spaces.</p>
          <Button type='primary' link="/comingsoon">Check all projects</Button>
      </div>
      <div className={styles.project_container}>
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
          <SplideSlide>
            <div className={styles.project}>
              <img src="/Images/Home/banner_image.jpg" className={styles.project_image} alt="Image 1"/>
              <div className={styles.project_desc}>
                <h3 className={styles.project_name}>Umang Nagaon</h3>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.project}>
              <img src="/Images/Home/mission_image.JPG" className={styles.project_image} alt="Image 2"/>
              <div className={styles.project_desc}>
                <h3 className={styles.project_name}>Utsav Nalapara</h3>
              </div>
            </div>
          </SplideSlide>
         
      </Splide>
      </div>
            
          
      
    </div>
  )
}
{/* <Modal
isOpen={modalIsOpen}
onAfterOpen={afterOpenModal}
onRequestClose={closeModal}
style={customStyles}
contentLabel="Form"
// className={styles.swing_in_top_fwd}
>
<div>
  <div className={styles.modal_header}>
    <h2>Please Fill this form</h2>
    <button className={styles.closeModal_btn} onClick={closeModal}><AiOutlineClose/></button>
  </div>
  
  <form action="" className={styles.brochureform}>
    <input type="text" placeholder='Name' />
    <input type="email" placeholder='Email' />
    <input type="number" placeholder='Phone Number' />
    <button  className={`${styles.btn} ${styles.btnPrimary} `}>Download Brochure</button>
  </form>
</div>
</Modal> */}
export default RecentProjects