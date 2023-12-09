import React from 'react'
import styles from './Blogs.module.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import BlogCard from '../../components/BlogCard/BlogCard'

const Blogs = () => {
  return (
    <>
        <Navbar/>
        <Header title={'Blogs'}/>
        <div className={styles.container}>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>

        </div>
        <Footer/>
    </>
  )
}

export default Blogs