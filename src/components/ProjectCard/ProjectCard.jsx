import React from 'react'
import styles from './ProjectCard.module.css'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'
import axiosConfig from '../../api/axiosConfig'
import { publicURL } from '../../api/axiosConfig'

const ProjectCard = ({projectInfo}) => {
  const navigate = useNavigate()
  console.log(JSON.parse(projectInfo.flatConfig))
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <img src={`${publicURL}/${projectInfo.projectImage1}`} alt="" />
      </div>
      <div className={styles.content}>
        <div className={styles.status}>
          <p>Completed Project</p>
        </div>
        <div className={styles.project_name}>
          <p className={styles.company_name}>Goldenwoods</p>
          <p className={styles.project_name_main}>{projectInfo.projectName}</p>
        </div>
        <div className={styles.basic_info}>
          <p >1, 2 & 3 BHK</p>
          <p>{projectInfo.location}</p>
        </div>
        <div>
          <p className={styles.project_desc}>{projectInfo.description.slice(0,300)}</p>
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