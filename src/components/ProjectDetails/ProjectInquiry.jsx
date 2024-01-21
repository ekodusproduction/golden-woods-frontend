import React, {useRef, useState} from 'react'
import styles from './ProjectInquiry.module.css'
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';

const ProjectInquiry = ({projectName}) => {
    const form = useRef();
    const [submitting, setSubmitting] = useState(false);
    const formSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);

    emailjs.sendForm('service_cs5vlng', 'template_74pnquo', form.current, 'hXVjB0wh5qLyBUqMq')
        .then((result) => {
            console.log(result);
            Swal.fire({
                icon: "success",
                title: "Success",
                text: "Form submitted successfully",
              });
        }, (error) => {
            console.log(error.text);
        }
        )
        .finally(() => {
            setSubmitting(false); // Re-enable the button and revert text
          });
      }
  return (
    <section className={styles.container}>
        <div className={styles.header}>
            <p className={styles.subhead}>QUICK INQUIRY</p>
            <h2>IF YOU HAVE ANY QUESTION? <br /> WE ARE GLAD TO CONSULT YOU AS SOON AS POSSIBLE</h2>
        </div>
        <form action="" ref={form} className={styles.form} onSubmit={formSubmit}>
            <div>
                <input type="text" placeholder='name' name='name' required className={styles.formfield} />
            </div>
            <div>
                <input type="number" placeholder='phone' name='phone' required className={styles.formfield} />
            </div>
            <div>
                <input type="email" placeholder='email' name='email' required className={styles.formfield} />
            </div>
            <div>
                <input type="text" placeholder='project' name='project' required value={projectName} className={styles.formfield} style={{visibility:'hidden',height:'1px'}} />
            </div>
            <div>
                <button type='submit' className={styles.button} disabled={submitting}  style={submitting ? { cursor: 'not-allowed', opacity: 0.7 } : {}}>
                {submitting ? 'Submitting...' : 'Submit'}
                </button>
            </div>
        </form>
    </section>
  )
}

export default ProjectInquiry