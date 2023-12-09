import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Button from '../../components/Button/Button';

import styles from './About.module.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im'
import {BiSolidPhoneCall,BiLogoGmail} from 'react-icons/bi'
import {FaHandshake} from 'react-icons/fa'
import {BsFillPeopleFill,BsGraphUp} from 'react-icons/bs'
import {MdGroups3} from 'react-icons/md'
import {AiOutlineCheckCircle} from 'react-icons/ai'


const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  },[]);
  return (
    <>
        <Navbar/>
        <Header title={'About us'}/>
        <section className={`${styles.greatSpacesSection} `}>
      <article className={styles.contentContainer} >
        <h2 className={styles.sectionHeading}>
         Know About us
        </h2>
        <p className={styles.description}>
          Experience the pinnacle of luxury living with The Golden Woods
          Developers. With a deep-rooted passion for real estate, a dedication
          to quality and a focus on sustainable development, we have become a
          trendsetter in the Real Estate Industry across the Northease, and have
          always focused on delivering the finest residential developments.
        </p>
        <p className={styles.description}>At the Golder Woods Developers, 
          we push the boundaries of luxury and deliver spaces that redefine the standard. 
          Discover the difference and see why we are the proud creators of some of most iconic projects. </p>
        
       
      </article>
      
      
      <div className={styles.about_image_container }>
        <img src="/Images/About/home_about.jpg" alt='' className={`${styles.section_image} ${styles.section_image_one}`} /> 
        <img src="/Images/About/vision_image.JPG" alt='' className={`${styles.section_image} `} /> 
      </div>
    </section>

    <section className={styles.about_container}>
      <div className={styles.about_img}>
        <img src="/Images/Home/mission_image.JPG" className={styles.about_img_item} alt="" />
        
      </div>
      <div className={styles.about_text}>
        <p className={styles.description}>The Golden Woods Developers is a leading and innovative real estate development firm committed to transforming landscapes and enriching communities. A part of the Golden Woods Group, we are in the business of Construction for the last 20 years. 
          Every structure that we built has given us a pleasant set of smiles from our customers. </p>
          <br />
          <p className={styles.description}>With a combined square feet area of 8.00 lakhs (approx.) feet, 
            we have created one of the finest livable spaces for our clients.
             As a leading Real Estate Developer, we bring Innovation, 
             Sustainability and a Passion for Excellence to every project that we undertake. 
             We are always committed to operate in a sustainable manner and strive to set the 
             benchmark in the Northeast of India for high quality and sustainable development,
             across different price segments and asset class. </p>
      </div>

    </section>

    <section className={styles.strip_container}>
      <div className={styles.strip_left}>
        <h3>Are You Ready To</h3>
        <h2>Buy Your Dream House?</h2>
      </div>
      <div className={styles.strip_right}>
        <p>Schedule a visit.</p>
        <div className={styles.tag_strip_contact}>
          <div className={styles.tag_strip_contact_icon}>
            <BiSolidPhoneCall  color='#e1ad01' size={30}/>
          </div>
          <p>+91 84484-44840</p>
        </div>
        <div className={styles.tag_strip_contact}>
          <div className={styles.tag_strip_contact_icon}>
            <BiLogoGmail color='#e1ad01' size={30}/>
          </div>
          <p>info@thegoldenwoods.in</p>
        </div>
      </div>
    </section>

    <section className={styles.whychooseus_container}>
      <div className={styles.whychooseus_header}>
        <h2>Why Choose Us</h2>
        <p className={`${styles.whychooseus_header_subline} `}>We don’t just meet standards, we set them. Our passion for excellence drives us to go above and 
          beyond,
          ensuring that every project – Big or Small, reflects our commitment to quality and innovation</p>
      </div>
      <div className={styles.whychooseus_content}>
        <div className={styles.whychooseus_content_card}>
          <div className={styles.whychooseus_content_card_img}>
            <BsGraphUp size={30}/>
          </div>
          <div className={styles.whychooseus_content_card_desc}>
            <h3>Experience that Speaks Volumes:</h3>
            <p className={styles.description}>With years of experience in the real estate industry, the Golden Woods Developers brings a wealth of knowledge to the table. Our seasoned professionals have successfully navigated diverse markets, ensuring you benefit from proven expertise in every transaction</p>
          </div>
        </div>
        <div className={styles.whychooseus_content_card}>
        <div className={styles.whychooseus_content_card_img}>
            <BsFillPeopleFill size={30}/>
          </div>
          <div className={styles.whychooseus_content_card_desc}>
            <h3>Client-Centric Focus:</h3>
            <p className={styles.description}>Your dreams and aspirations are at the heart of everything we do. We take the time to understand your unique needs and work tirelessly to turn your real estate goals into reality. Your satisfaction is our ultimate priority. </p>
          </div>
        </div>
        <div className={styles.whychooseus_content_card}>
        <div className={styles.whychooseus_content_card_img}>
            <AiOutlineCheckCircle size={30}/>
          </div>
          <div className={styles.whychooseus_content_card_desc}>
            <h3>Tailored Solutions for You: </h3>
            <p className={styles.description}>Recognizing that each client is unique, we offer personalized solutions that align with your specific requirements. Whether you’re a first-time homebuyer, an investor, or a property re-seller, our services are tailored to suit your individual needs. </p>
          </div>
        </div>
        <div className={styles.whychooseus_content_card}>
        <div className={styles.whychooseus_content_card_img}>
            <FaHandshake size={30}/>
          </div>
          <div className={styles.whychooseus_content_card_desc}>
            <h3>Transparent and Honest Communication: </h3>
            <p className={styles.description}>Trust is the cornerstone of our relationships. We pride ourselves on transparent and honest communication, keeping you informed at every stage of the process. No hidden surprises – just a straightforward, trustworthy partnership. </p>
          </div>
        </div>
        <div className={styles.whychooseus_content_card}>
        <div className={styles.whychooseus_content_card_img}>
            <MdGroups3 size={30}/>
          </div>
          <div className={styles.whychooseus_content_card_desc}>
            <h3>Passionate Team of Professionals: </h3>
            <p className={styles.description}>Our success is driven by the passion and dedication of our team. From our sales executives to project managers, we are a team of professionals who love what we do, and that passion is reflected in the exceptional service we provide. </p>
          </div>
        </div>

      </div>
    </section>

    <section className={styles.mission_container}>
      <div className={styles.mission_banner}>
        <img src="/Images/About/mission_banner.png" alt="" />
      </div>
      <div className={styles.mission_subcontainer}>
        <div className={styles.mission_image}>
          <img src="/Images/Home/banner_image.jpg" alt="" />
        </div>
        <div className={styles.mission_text}>
        <div className={styles.mission_header}>
           <h2 className={styles.mission_header_main}>Our Mission</h2>           
        </div>
          <div className={styles.mission_main_body}>
              <div className={styles.mission_subheader_container}>
                  <span><ImQuotesLeft color='#e1ad01'/></span>
                  <p>Empowering Dreams, Building Futures</p>
                  <span><ImQuotesRight  color='#e1ad01'/></span>
              </div>
              <p className={styles.description}>Our Mission is to be a beacon of Trust and Innovation in the real estate industry. We are dedicated to creating exceptional experiences for our clients by delivering unparalleled service, fostering lasting relationships and embracing cutting-edge technology. 
                Guided by Integrity, Transparency and a Commitment to Excellence, we strive to exceed expectations in every transaction. Our team of skilled professionals work tirelessly to transform dreams into reality, helping individuals and families find their ideal homes and investors secure lucrative opportunities. </p>
              <br />
              <p className={styles.description}>We believe in the transformative power of real estate to shape communities and enrich lives. By staying at the forefront of industry trends and adopting sustainable practices, we aim to contribute to the long-term prosperity and well-being of the regions we serve. 
            At the Golden Woods Developers, we don’t just sell properties, we craft future.  Join us on this journey, where your aspirations meet our expertise and together, we will build the foundations for a brighter tomorrow.  </p>
          </div>
        </div>
      </div>
    </section>

    {/* vission */}

    <section className={styles.vission_container}>
      <div className={styles.vission_subcontainer}>
        <div className={styles.vission_image}>
          <img src="/Images/About/whychooseus.jpg" className={styles.vision_image} alt="" />
          <img src="/Images/Home/banner_image.jpg" alt="" />
        </div>
        <div className={styles.vission_text}>
        <div className={styles.vission_header}>
           <h2 className={styles.vission_header_main}>Our Vision</h2>           
        </div>
          <div className={styles.vission_main_body}>
              <div>
                <div className={styles.vission_subheader_container}>
                    <span><ImQuotesLeft color='#e1ad01'/></span>
                    <p>Inspired Living, Timeless Design </p>
                    <span><ImQuotesRight  color='#e1ad01'/></span>
                </div>
                <p className={styles.description}>We believe in creating spaces that go beyond the ordinary. Our vision is to craft environments that inspire, uplift and stand the test of time. Each development is a testament to our commitment to excellence in design and functionality.  </p>
                <br />
              </div>
              <div>
                <div className={styles.vission_subheader_container}>
                    <span><ImQuotesLeft color='#e1ad01'/></span>
                    <p>Sustainable Futures  </p>
                    <span><ImQuotesRight  color='#e1ad01'/></span>
                </div>
                <p className={styles.description}>Environmental responsibility is at the core of our ethos. We integrate sustainable practices into every aspect of our developments, ensuring that we are not only build for today but also contribute to a greener and more sustainable future.  </p>
                <br />
              </div>
              <div>
                <div className={styles.vission_subheader_container}>
                    <span><ImQuotesLeft color='#e1ad01'/></span>
                    <p>Values</p>
                    <span><ImQuotesRight  color='#e1ad01'/></span>
                </div>
                <ul className={styles.description}>
                  <li><b>Integrity:</b> We uphold the highest ethical standards and honesty in all the transactions that we do. For us, integrity is fundamental to build trust with clients, partners and the community. </li>
                  <li><b>Innovation:</b> We have embraced the core idea of creativity and innovation in real estate solutions. Being open to new technologies, we have always stayed ahead in this dynamic market with sustainable practices and modern designs. </li>
                  <li><b>Professionalism:</b> Demonstrating a high level of professionalism in interactions with clients, colleagues and other stakeholders. This include timely communications, respect and a commitment to excellence.  </li>
                  <li><b>Commitment to Quality:</b> Delivering high-quality services and properties. This involves attention to detail, craftmanship and a commitment to excellence in all aspects of real estate development, construction and transactions. </li>
                  <li><b>Sustainability:</b> Integrating environmentally sustainable practices into real estate development. This includes energy -efficient designs, green building materials and a commitment to minimizing the environmental impact of projects. </li>
                </ul>
                <br />
              </div>
              
          </div>
        </div>
      </div>
    </section>

        <Footer/>
    
    </>
  )
}

export default About