import React from 'react'
import styles from './Dropdown.module.css'
import { Link } from 'react-router-dom'

const Dropdown = ({link}) => {
  return (
    <div className={styles.container}>
        <ul className={styles.dropdown_list}>
            <li><Link to={'/property'}>Ongoing projects</Link></li>
            <li><Link to={'/property'}>Completed Projects</Link></li>
            <li><Link to={'/property'}>Upcoming Projects</Link></li>
        </ul>
    </div>
  )
}

export default Dropdown