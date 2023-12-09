import React from 'react'
import styles from './ProjectConfigurations.module.css'
import Button from '../Button/Button'

const ProjectConfigurations = () => {
  return (
    <section className={styles.container}>
        <h2>Project Configutrations</h2>
        <div className={styles.content}>
            <div className={styles.content_card}>
                <h3>1BHK</h3>
                <div className={styles.content_card_child}>
                    <p>Carpet (Sq. Ft)</p>
                    <p><b>432 - 522 sq. ft.</b></p>
                </div>
                <Button type={'btnPrimary'}>Check for Price</Button>
            </div>
            <div className={styles.content_card}>
                <h3>1BHK</h3>
                <div className={styles.content_card_child}>
                    <p>Carpet (Sq. Ft)</p>
                    <p><b>432 - 522 sq. ft.</b></p>
                </div>
                <Button type={'btnPrimary'}>Check for Price</Button>
            </div>
            <div className={styles.content_card}>
                <h3>1BHK</h3>
                <div className={styles.content_card_child}>
                    <p>Carpet (Sq. Ft)</p>
                    <p><b>432 - 522 sq. ft.</b></p>
                </div>
                <Button type={'btnPrimary'}>Check for Price</Button>
            </div>
        </div>
    </section>
  )
}

export default ProjectConfigurations