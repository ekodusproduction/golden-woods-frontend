import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";

import {FaFacebookF,FaInstagram,FaEnvelope} from 'react-icons/fa'
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";

const navbarData = [
  
  {
    title: "About us",
    link: "/about",
  },
  {
    title: "Property",
    link: "/property",
   
  },
  {
    title: "Blog",
    link: "/blogs",
  },
  
];

const Navbar = () => {


  
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);


  const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 280) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
        
    };
    window.addEventListener('scroll', changeNavbarColor);

  const navbarActiveHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const navbarStyles = isOpen
    ? `${styles.navbar} ${styles.active}`
    : styles.navbar;

  return (
    <nav className={`${styles.navbar} ${navbarStyles} ${colorChange? styles.navwhite:''}`}>
      <div className={styles.logo}>
        <img src={window.scrollY >= 280 ? "/Images/golden_woods_logo.png": "/Images/golden_woods_logo_white.png"} className={colorChange?styles.logo_item_small:styles.logo_item} alt="" />
      </div>
      <ul className={styles.navLinks} >
      <Link to="/" className={`${styles.navlink} ${colorChange? styles.navLinkBlack:''} `}>Home</Link>
      {navbarData.map((item) => {
          return (
            <li key={item.title} className={styles.nav_item}>
              <Link to={item.link}  
              onMouseEnter={() => setHoveredItem(item.title)}
              onMouseLeave={() => setHoveredItem(null)}
              
              
              className={`${styles.navlink} ${colorChange? styles.navLinkBlack:''} `}>{item.title}</Link>
                {hoveredItem === item.title  && <div
              onMouseEnter={() => setHoveredItem(item.title)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item.dropdown}
            </div>}
            </li>

          );
        })}
        <Link to="/contact" className={`${styles.navlink} ${colorChange? styles.navLinkBlack:''} `}>Contact Us</Link>
        
      
        
      </ul>
      <div className={styles.hamburgerContainer} >
        <article className={styles.hamburger} onClick={navbarActiveHandler}>
          <span className={styles.hamburgerItem} style={{ backgroundColor: isOpen ? 'white' : window.scrollY >= 280 ? 'black' : 'white'}} ></span>
          <span className={styles.hamburgerItem} style={{ backgroundColor: isOpen ? 'white' : window.scrollY >= 280 ? 'black' : 'white'}} ></span>
          <span className={styles.hamburgerItem}  style={{ backgroundColor: isOpen ? 'white' : window.scrollY >= 280 ? 'black' : 'white'}} ></span>
        </article>
      </div>
  
    
        <ul className={styles.navList}>
        <Link to='/'>Home</Link>
          {navbarData.map((item) => 
            (
              <li key={item.title}>
                <Link to={item.link}>{item.title}</Link>
              </li>
            )
          )}
           <Link to='/contact'>Contact Us</Link>
        </ul>
       
     
     
    </nav>
  );
};

export default Navbar;
