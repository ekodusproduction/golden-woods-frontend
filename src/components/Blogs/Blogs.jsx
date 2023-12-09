import React from 'react'
import styles from './Blogs.module.css'
import BlogCard from '../BlogCard/BlogCard'

const Blogs = () => {
  return (
    <div className={styles.blogs}>
        <h2 className={styles.header}>Our Blogs</h2>
        <div className={styles.blog_container}>
            <p>No blogs as of now. Check back later!</p>
        </div>
    </div>
  )
}

export default Blogs