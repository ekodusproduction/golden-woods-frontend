import React from 'react'
import styles from './ProjectInquiry.module.css'
import Button from '../Button/Button'

const ProjectInquiry = () => {
  return (
    <section className={styles.container}>
        <div className={styles.header}>
            <p className={styles.subhead}>QUICK INQUIRY</p>
            <h2>IF YOU HAVE ANY QUESTION? <br /> WE ARE GLAD TO CONSULT YOU AS SOON AS POSSIBLE</h2>
        </div>
        <form action="" className={styles.form}>
            <div>
                <input type="text" placeholder='Name' className={styles.formfield} />
            </div>
            <div>
                <input type="number" placeholder='Phone Number' className={styles.formfield} />
            </div>
            <div>
                <input type="email" placeholder='Email Address' className={styles.formfield} />
            </div>
            <div>
                <button className={styles.button}>Submit</button>
            </div>
        </form>
    </section>
  )
}

export default ProjectInquiry