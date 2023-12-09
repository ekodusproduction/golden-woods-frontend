import React from 'react'
import styles from './ProjectReach.module.css'
import { BsCaretRightFill } from "react-icons/bs";

const ProjectReach = () => {
  return (
    <section className={styles.container}>
        <img src="/Images/location.jpg" alt="" className={styles.image} />
        <div className={styles.content}>
            <h2 className={styles.header}>Everything within Reach</h2>
            <ul className={styles.list}>
                <li className={styles.list_item}>
                    <BsCaretRightFill />
                    <p>ISBT, Balaji Temple - 5.3 Km</p>
                </li>
                <li className={styles.list_item}>
                    <BsCaretRightFill />
                    <p>ISBT, Balaji Temple - 5.3 Km</p>
                </li>
                <li className={styles.list_item}>
                    <BsCaretRightFill />
                    <p>ISBT, Balaji Temple - 5.3 Km</p>
                </li>
                <li className={styles.list_item}>
                    <BsCaretRightFill />
                    <p>ISBT, Balaji Temple - 5.3 Km</p>
                </li>
                <li className={styles.list_item}>
                    <BsCaretRightFill />
                    <p>ISBT, Balaji Temple - 5.3 Km</p>
                </li>
                <li className={styles.list_item}>
                    <BsCaretRightFill />
                    <p>ISBT, Balaji Temple - 5.3 Km</p>
                </li>
                <li className={styles.list_item}> 
                    <BsCaretRightFill />
                    <p>ISBT, Balaji Temple - 5.3 Km</p>
                </li>
                <li className={styles.list_item}>
                    <BsCaretRightFill />
                    <p>ISBT, Balaji Temple - 5.3 Km</p>
                </li>
                <li className={styles.list_item}>
                    <BsCaretRightFill />
                    <p>ISBT, Balaji Temple - 5.3 Km</p>
                </li>
                <li className={styles.list_item}>
                    <BsCaretRightFill />
                    <p>ISBT, Balaji Temple - 5.3 Km</p>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default ProjectReach