import React from 'react'
import styles from './ProjectCard.module.css'
import Button from '../Button/Button'
import { publicURL } from '../../api/axiosConfig'

const ProjectCard = ({projectInfo}) => {
  console.log(projectInfo)

  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <img src={`${publicURL}/${projectInfo.projectImage1}`} alt="" />
      </div>
      <div className={styles.content}>
        <div className={styles.status}>
        </div>
        <div className={styles.project_name}>
          <p className={styles.company_name}>Goldenwoods</p>
          <p className={styles.project_name_main}>{projectInfo.projectName}</p>
          <p className={styles.city}> {projectInfo.city}</p>
        </div>
        <div className={styles.basic_info}>
         
        </div>
        <div className={styles.buttons}>
          <Button link={`/propertydetails?id=${projectInfo.id}`} type={'btnPrimary'}>Know More</Button>
          <a href={`${publicURL}${projectInfo.brochure}`} target='_blank' download className={styles.downloadbrochure}>Download PDF</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard