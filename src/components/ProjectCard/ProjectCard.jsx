import React from 'react'
import styles from './ProjectCard.module.css'
import Button from '../Button/Button'

const ProjectCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <img src="Images/Home/home_about.jpg" alt="" />
      </div>
      <div className={styles.content}>
        <div className={styles.status}>
          <p>Completed Project</p>
        </div>
        <div className={styles.project_name}>
          <p className={styles.company_name}>Goldenwoods</p>
          <p className={styles.project_name_main}>Utsav</p>
        </div>
        <div className={styles.basic_info}>
          <p >1, 2 & 3 BHK</p>
          <p>Nalapara, NH37, Guwahat</p>
        </div>
        <div>
          <p className={styles.project_desc}>Step into Golden Woods Utsav and watch the doors of a holistic
          lifestyle open up in front of you! Designed for the urban at heart,
          this project beings the best aspects of city life to you. Come and
          experience a home beyond compare!</p>
        </div>
        <div className={styles.buttons}>
          <Button link={'/propertydetails'} type={'btnPrimary'}>Know More</Button>
          <Button>Download PDF</Button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard