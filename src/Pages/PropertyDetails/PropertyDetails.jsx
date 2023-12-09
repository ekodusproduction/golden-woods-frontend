import React from 'react'
import styles from './PropertyDetails.module.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'
import ProjectAbout from '../../components/ProjectDetails/ProjectAbout'
import ProjectConfigurations from '../../components/ProjectDetails/ProjectConfigurations'
import ProjectAmenities from '../../components/ProjectDetails/ProjectAmenities'
import ProjectReach from '../../components/ProjectDetails/ProjectReach'
import ProjectGallery from '../../components/ProjectDetails/ProjectGallery'
import ProjectExteriorInterior from '../../components/ProjectDetails/ProjectExteriorInterior'
import ProjectInquiry from '../../components/ProjectDetails/ProjectInquiry'



const PropertyDetails = () => {
  return (
    <>
        <Navbar/>
        <section className={styles.container}>
            <div className={styles.header}>
            <fieldset className={styles.header_text}>
                <legend className={styles.header_legend}>Golden Woods</legend>
                <h2 className={styles.header_project_name}>Project Name</h2>
                <p className={styles.header_tagline}>Complex Meant For <b>Urban Lifestyles</b> </p>
            </fieldset>
            </div>
            <div className={styles.header_button}>
                <Button type={'btnPrimary'}>Download Brochure</Button>
            </div>
        </section>
       <ProjectAbout/>
       <ProjectConfigurations/>
       <ProjectAmenities/>
       <ProjectReach/>
       <ProjectGallery/>
       <ProjectExteriorInterior/>
       <ProjectInquiry/>
        <Footer/>
    </>
  )
}

export default PropertyDetails