import React, {useState} from 'react'
import styles from './OurExpertise.module.css'
import {MdEngineering} from 'react-icons/md'

const OurExpertise = () => {
    const [selectedExpertise,setSelectedExpertise] = useState('comprehensive');
    const openExpertise = (exp) => {
        console.log(exp)
        setSelectedExpertise(exp)
    }
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h2 className={styles.header_text}>Our Expertise</h2>
        </div>
        <div className={styles.content_container}>
            <p className={styles.subhead}>At Golden Woods Developers, our unwavering commitment to excellence, innovation and client satisfaction sets us apart in the dynamic world of real estate. With 20 years of industry experience, a dedicated team of professionals and a passion for creating exceptional spaces, we bring a wealth of expertise to every project.</p>
           <div className={styles.main_content}>
                <div className={styles.tab}>
                    <button className={`${styles.tablinks} ${selectedExpertise === 'comprehensive' ? `${styles.expactive}` : ''}`} onClick={()=>openExpertise('comprehensive')}>Comprehensive Real Estate Solutions </button>
                    <button className={`${styles.tablinks} ${selectedExpertise === 'client' ? `${styles.expactive}` : ''}`}  onClick={()=>openExpertise('client')}>Client Centric Approach</button>
                    <button className={`${styles.tablinks} ${selectedExpertise === 'technology' ? `${styles.expactive}` : ''}`}  onClick={()=>openExpertise('technology')}>Technology Integration</button>
                </div>
                <div className={styles.tab_content_container}>
                    {selectedExpertise === 'comprehensive' &&
                          <div className={styles.tabcontent}>
                          <div className={styles.card}>
                              <div className={styles.card_icon}>
                                  <MdEngineering size={30} color='#e1ad01'/>
                                  <h3>Strategic Development Planning</h3>
                              </div>
                              
                              <p className={styles.card_desc}>Our team of experts excels in strategic development planning, carefully analyzing market trends and opportunities to create projects that not only meet but exceed expectations.</p>
                          </div>
                          <div className={`${styles.card} ${styles.card_mid}`}>
                              <div className={styles.card_icon}>
                                  <MdEngineering size={30}  color='#e1ad01'/>
                                  <h3>Architectural Innovation</h3>
                              </div>
                             
                              <p className={styles.card_desc}>We pride ourselves on pushing the boundaries of architectural design. Our in-house architects blend creativity with functionality, ensuring that each project is a masterpiece in both form and function.</p>
                          </div>
                          <div className={styles.card}>
                              <div className={styles.card_icon}>
                                  <MdEngineering size={30}  color='#e1ad01'/>
                                  <h3>Sustainable Development</h3>
                              </div>
                            
                              <p className={styles.card_desc}>Environmental responsibility is at the core of our development philosophy. We integrate sustainable practices, green technologies and energy efficient designs into every project to create spaces that stand the test of time.</p>
                          </div>
                      </div>
                    
                    }
                    {selectedExpertise ==='client' && 
                        <div className={styles.tabcontent}>
                        <div className={styles.card}>
                            <div className={styles.card_icon}>
                                <MdEngineering size={30} color='#e1ad01'/>
                                <h3>Customised Solutions</h3>
                            </div>
                            
                            <p className={styles.card_desc}>Recognizing that every client is unique, we tailor our services to meet your specific needs. Whether you’re a homebuyer, seller, investor or developer, we have the expertise to guide you through complexities of real estate transactions. </p>
                        </div>
                        <div className={`${styles.card} ${styles.card_mid}`}>
                            <div className={styles.card_icon}>
                                <MdEngineering size={30}  color='#e1ad01'/>
                                <h3>Transparent Communication</h3>
                            </div>
                           
                            <p className={styles.card_desc}>Open and transparent communication is the bedrock of our client relationships. We keep you informed at every stage, providing clarity of processes, timelines and potential challenges.</p>
                        </div>
                       
                    </div>
                    
                    }

                    {selectedExpertise ==='technology' && 
                        <div className={styles.tabcontent}>
                        <div className={styles.card}>
                            <div className={styles.card_icon}>
                                <MdEngineering size={30} color='#e1ad01'/>
                                <h3>Virtual Tours and 3D Renderings</h3>
                            </div>
                            
                            <p className={styles.card_desc}>Embracing cutting-edge technology, we offer immersive virtual tours and 3D renderings that allow you to experience properties in unprecedented detail, enhancing your decision-making process.</p>
                        </div>
                        <div className={`${styles.card} ${styles.card_mid}`}>
                            <div className={styles.card_icon}>
                                <MdEngineering size={30}  color='#e1ad01'/>
                                <h3>Data-Driven Insights</h3>
                            </div>
                           
                            <p className={styles.card_desc}>Our reliance on data-driven insights ensures that our clients have access to the most up-to-date market information, empowering them to make informed and strategic decisions.</p>
                        </div>
                       
                    </div>
                    
                    }
                  

                    <div className={styles.image_section}>
                        <img src="/Images/Home/mission_image.JPG" className={styles.image}  alt="" />
                    </div>

                   
                </div>
           </div>
        </div>
    </div>
  )
}

export default OurExpertise