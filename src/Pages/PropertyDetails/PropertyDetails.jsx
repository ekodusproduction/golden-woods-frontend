import React, { useState,useEffect } from 'react'
import styles from './PropertyDetails.module.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'
import ProjectAbout from '../../components/ProjectDetails/ProjectAbout'
import ProjectConfigurations from '../../components/ProjectDetails/ProjectConfigurations'
import ProjectAmenities from '../../components/ProjectDetails/ProjectAmenities'
import ProjectReach from '../../components/ProjectDetails/ProjectReach'
import ProjectGallery from '../../components/ProjectDetails/ProjectGallery'
import ProjectExterior from '../../components/ProjectDetails/ProjectExterior'
import ProjectInquiry from '../../components/ProjectDetails/ProjectInquiry'
import axiosConfig, { publicURL } from '../../api/axiosConfig'
import { useLocation } from 'react-router-dom';
import { ParallaxBanner , ParallaxBannerLayer} from 'react-scroll-parallax';
import Loader from '../../components/Loader/Loader'
import ProjectInterior from '../../components/ProjectDetails/ProjectInterior'
import VideoSection from '../../components/VideoSection/VideoSection'
import AOS from "aos";
import "aos/dist/aos.css";



const PropertyDetails = () => {
  const [projectInfo,setProjectInfo] = useState({});
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');



  useEffect(()=> {
 
    axiosConfig.get(`/project/get/${id}`)
    .then(response => {
      const responseData = response.data;
      return JSON.parse(JSON.stringify(responseData.data));
    })
    .then(data => {
      console.log(data)
      setProjectInfo(data)
    })
  },[id])

  console.log( projectInfo.project?.projectName)

  return (
    <div>
     {Object.keys(projectInfo).length > 0 ? (
      <>
        <Navbar/>
        <ParallaxBanner style={{height:'100%'}} >
        <ParallaxBannerLayer image={`${publicURL}${projectInfo.project?.projectBanner}`} speed={-5} scale={[1, 1.5]} translateY={-30}  />
        <section className={styles.container}>
        <div className={styles.backgroundOverlay}></div>
            <div className={styles.header}>
            <fieldset className={styles.header_text}>
                <legend className={styles.header_legend}>Golden Woods</legend>
                <h2 className={styles.header_project_name}>{projectInfo.project?.projectName}</h2>
                <p className={styles.header_tagline}>Complex Meant For <b>Urban Lifestyles</b> </p>
            </fieldset>
            </div>
            <div className={styles.header_button}>
                <Button type={'btnPrimary'}>Download Brochure</Button>
            </div>
        </section>
        </ParallaxBanner>
       <ProjectAbout overviewHeading={projectInfo.project?.overviewHeading}  
                      overviewFooter={projectInfo.project?.overviewFooter} 
                      overviewContent={projectInfo.project?.overviewContent}
                      mainImage = {projectInfo.project?.projectImage1}
                      secondaryImage = {projectInfo.project?.projectImage2}
                      />
       <ProjectConfigurations configuration = {projectInfo.project?.flatConfig}/>
       <ProjectAmenities projectId={projectInfo.project?.id}/>
       <VideoSection video={projectInfo.project?.projectVideo}/>
       <ProjectReach withinReach={projectInfo.project?.withinReach} image={projectInfo.project?.withinReachImage}/>
       <ProjectGallery archImages = {projectInfo.project?.images.architectural}/>
       <ProjectExterior exteriorImages = {projectInfo.project?.images.exterior}/>
       <ProjectInterior interiorImages={projectInfo.project?.images.interior}/>
       <ProjectInquiry/>
        <Footer/>
        </>
     ) : <Loader/>}
    </div>
   
  )
}

export default PropertyDetails