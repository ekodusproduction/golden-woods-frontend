import React from 'react'
import styles from './ProjectReach.module.css'
import { BsCaretRightFill } from "react-icons/bs";
import { publicURL } from '../../api/axiosConfig';

const ProjectReach = ({withinReach,image}) => {
  return (
    <section className={styles.container}>
        <img src={`${publicURL}${image}`} alt="" className={styles.image} />
        <div className={styles.content}>
            <h2 className={styles.header}>Everything within Reach</h2>
            <ul className={styles.list}>
                {withinReach.map((item,index)=> (
                        <li className={styles.list_item} key={index}>
                        <BsCaretRightFill />
                        <p>{item?.name} - {item.distance}</p>
                    </li>
                ))}
                
            </ul>
        </div>
    </section>
  )
}

export default ProjectReach