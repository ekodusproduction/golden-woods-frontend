import React from 'react'
import styles from './BlogCard.module.css'
import {BsArrowRight} from 'react-icons/bs'

const BlogCard = () => {
  return (
    <div className={styles.blog_card}>
        <img src="/Images/Home/whychooseus.jpg" alt="" className={styles.blog_image} />
        <div>
            <div className={styles.content}>
                <div className={styles.preheader}>
                    <p className={styles.genre}>Genre</p>
                    <p className={styles.date}>Oct 5, 2023</p>
                </div>
                <div>
                    <h3>Blog Title</h3>
                    <div className={styles.blog_author}>
                        <img src="/image/profile.png" className={styles.profileimg} alt="" />
                        <p className={styles.author_name}>Blog Author</p>
                    </div>
                </div>
                <p className={styles.blog_detail}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dignissimos laboriosam ex architecto magnam laboriosam ex architecto magnam....</p>
                <a href="" className={styles.readmore}>Read More <BsArrowRight/></a>
            </div>
        </div>
    </div>
  )
}

export default BlogCard