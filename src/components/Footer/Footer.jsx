import React from 'react'
import styles from './Footer.module.css'
import {BsFacebook} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import {BiSolidPhoneCall,BiLogoInstagramAlt,BiLogoLinkedinSquare,BiLogoYoutube,BiLogoGmail} from 'react-icons/bi'
import { FaWhatsapp } from "react-icons/fa"
const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footer_about}>
            <img src="/static_files/golden_woods_logo_white.png" className={styles.footer_logo} alt="logo" />
            <p>We continuously strive to provide the best living experience. 
                Today, better than yesterday. Tomorrow, better than today.</p>
        </div>
        <div>
            <h3>Quick Links</h3>
            <ul className={styles.quick_links}>
                <Link to='/'>Home</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/property'>Projects</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/contact'>Contact us</Link>
            </ul>
        </div>
        <div className={styles.contact}>
            <h3>Contact Us</h3>
            <div>
                <b>Address: </b>
                <p className={styles.address}>3rd Floor, Universal Metrowalk, Lokhra,<br /> Guwahati, Assam - 781034</p>
            </div>
            <div className={styles.contact_item}>
                <div>
                    <BiSolidPhoneCall color='#e1ad01'/>
                </div>
                <p>+91 84484 44840</p>
            </div>
            <div className={styles.contact_item}>
                <div>
                    <BiLogoGmail color='#e1ad01'/>
                </div>
                <p>info@thegoldenwoods.in</p>
            </div>
        </div>
        <div className={styles.hours}>
            <h3>Business Hours</h3>
            <p><b>Mon - Sun: 9:30AM - 5:30PM</b></p>
            <div className={styles.social_links}>
                <a href="https://www.facebook.com/GoldenWoodsGroup" target='_blank'><BsFacebook size={20} color='#e1ad01'/></a>
                <a href="https://www.instagram.com/goldenwoodsgroup/" target='_blank'><BiLogoInstagramAlt size={25} color='#e1ad01'/></a>
                <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQE2elH8cV_-swAAAYtMpr4wsC7q6qFAETskOnC9HbcLYFl9FUsC48DZhVVMSeMq4nrsWeaVXdz4JVJL2bERvyM3lMUxQWkk2KRRis1-kdnX5bXo0yuggwZW3hIXdEfXyb0mg2M=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fthe-golden-woods-developers%2F" target='_blank'><BiLogoLinkedinSquare size={25} color='#e1ad01'/></a>
                <a href="https://www.youtube.com/@thegoldenwoodsdevelopers7237" target='_blank'><BiLogoYoutube size={25} color='#e1ad01'/></a>
                <a href="https://api.whatsapp.com/send?phone=8448444840" target='_blank'><FaWhatsapp size={25} color='#e1ad01'/></a>
            </div>
        </div>

    </footer>
  )
}

export default Footer