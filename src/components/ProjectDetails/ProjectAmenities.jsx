import React from 'react'
import styles from "./ProjectAmenities.module.css"

const ProjectAmenities = () => {
  return (
    <section className={styles.container}>
        <h2 className={styles.header}>Amenities</h2>
        <div className={styles.content}>
            <div className={styles.content_card}>
                <img src="/icons/experience.png" alt="" className={styles.icon}/>
                <h3>Amenity Title</h3>
            </div>
            <div className={styles.content_card}>
                <img src="/icons/experience.png" alt="" className={styles.icon} />
                <h3>Amenity Title</h3>
            </div>
            <div className={styles.content_card}>
                <img src="/icons/experience.png" alt="" className={styles.icon} />
                <h3>Amenity Title</h3>
            </div>
            <div className={styles.content_card}>
                <img src="/icons/experience.png" alt="" className={styles.icon} />
                <h3>Amenity Title</h3>
            </div>
            <div className={styles.content_card}>
                <img src="/icons/experience.png" alt="" className={styles.icon} />
                <h3>Amenity Title</h3>
            </div>
            <div className={styles.content_card}>
                <img src="/icons/experience.png" alt="" className={styles.icon} />
                <h3>Amenity Title</h3>
            </div>
            <div className={styles.content_card}>
                <img src="/icons/experience.png" alt="" className={styles.icon} />
                <h3>Amenity Title</h3>
            </div>
            <div className={styles.content_card}>
                <img src="/icons/experience.png" alt="" className={styles.icon} />
                <h3>Amenity Title</h3>
            </div>
        </div>
    </section>
  )
}

export default ProjectAmenities