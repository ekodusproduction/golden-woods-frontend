import React from 'react'
import styles from './ProjectAbout.module.css'

const ProjectAbout = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h3 className={styles.content_header}>The Home You Never <br /> Need To Leave</h3>
            <p className={styles.content_desc}>Step into Golden Woods Utsav and watch the doors of a holistic
            lifestyle open up in front of you! Designed for the urban at heart, this
            project beings the best aspects of city life to you. Come and
            experience a home beyond compare! <br /> <br />
            Step into the calm, cool waters of the pool at the end of a long day.
            Let your senses relax as the soothing ripples gently caress over you.
            And feel rejuvenated instantly. At Golden Woods Utsav, the tranquil
            blue swimming pool within premises will make this your daily reality!</p>
            <h3 className={styles.content_tag}>CREATE YOUR STORY IN A <br /> PLACE WHERE DREAMS <br /> AND REALITY MERGE.</h3>
        </div>
        <div className={styles.images}>
            <img src="/Images/Home/banner_image.jpg" alt="" className={styles.main_image} />
            <img src="/Images/Home/banner_image.jpg" alt="" className={styles.secondary_image} />
        </div>

    </section>
  )
}

export default ProjectAbout