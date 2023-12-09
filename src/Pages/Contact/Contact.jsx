import React from 'react'
import styles from './Contact.module.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

import {BiSolidPhoneCall} from 'react-icons/bi'
import {FaLocationArrow} from 'react-icons/fa'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <Header title={'Contact Us'}/>
        <div className={styles.contact_form_container}>
            <form action="" className={styles.contact_form}>
            <h2>Contact Form</h2>
                <div>
                    <input type="text" placeholder='Name' />
                </div>
                <div>
                    <input type="email" placeholder='Email' />
                </div>
                <div>
                    <input type="number" placeholder='Phone Number' />
                </div>
                <div>
                    <textarea name="" placeholder='Message' id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button disabled={true}>Send</button>
                </div>
            </form>
            <div className={styles.contact_main}>
            <div>
                <h2 className={styles.contact_main_header}>Contact Nagaon Team</h2>
                <div className={styles.contact_main_item}>
                    <div>
                        <span><BiSolidPhoneCall size={20} color='#e1ad01'/>  </span>
                        <span>86387-79076/ 70990-14499/ 70990-62578</span>
                    </div>
                    <div>
                        <span><FaLocationArrow size={16}  color='#e1ad01'/>  </span>
                        <span>Jyoti Nagar, Panigaon, Near GNDC Commerce College. nagaon, Assam - 782003 </span>
                    </div>

                </div>
            </div>
            <div>
                <h2 className={styles.contact_main_header}>Contact Guwahati Team</h2>
                <div className={styles.contact_main_item}>
                    <div>
                        <span><BiSolidPhoneCall size={20}  color='#e1ad01'/>  </span>
                        <span>86387-79076/ 70990-14499/ 70990-62578</span>
                    </div>
                    <div>
                        <span><FaLocationArrow size={16}  color='#e1ad01'/> </span>
                        <span>Jyoti Nagar, Panigaon, Near GNDC Commerce College. nagaon, Assam - 782003 </span>
                    </div>

                </div>
            </div>
        </div>
        </div>
        <div className={styles.map}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57296.498533632475!2d91.70857012167967!3d26.16311470000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a590fab4a9dff%3A0xab8952c09ed14a3b!2sThe%20Golden%20Woods%20Group!5e0!3m2!1sen!2sin!4v1697608009012!5m2!1sen!2sin" width="600" height="450" className={styles.map_item} allowfullscreen="" loading="lazy" ></iframe>
      </div>
        <Footer/>
    </div>
  )
}

export default Contact