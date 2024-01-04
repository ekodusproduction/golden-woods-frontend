import React from 'react'
import styles from './ProjectConfigurations.module.css'
import Button from '../Button/Button'
import { ParallaxBanner , ParallaxBannerLayer} from 'react-scroll-parallax';

const ProjectConfigurations = ({configuration,setFormOpen}) => {
    const formOpenHandler = () => {
        setFormOpen(true);
        document.body.style.overflow = "hidden"
      }
    
  return (
    <>
    {/* {configuration && 
        <ParallaxBanner className={styles.parallaxcontainer}  >
        <ParallaxBannerLayer image={`/public/Images/home_consultation.JPG`} speed={-5} scale={[1, 1.5]} translateY={-30}  />
        <ParallaxBannerLayer>
        <section className={styles.container}>
            <h2>Project Configutrations</h2>
            <div className={styles.content}>
                {configuration.map((item,index)=> (
                    <div className={styles.content_card}>
                    <h3>{item.type}</h3>
                    <div className={styles.content_card_child}>
                        <p>Carpet (Sq. Ft)</p>
                        <p><b>{item.size} sq. ft.</b></p>
                    </div>
                    <Button type={'btnPrimary'}>Check for Price</Button>
                </div>
    
                ))}
                
               
            </div>
        </section>
        </ParallaxBannerLayer>
        </ParallaxBanner>
    
    } */}
    <section className={styles.container}>
        <div className={styles.header}>
            <h2><span>Project</span><span>Configuration</span></h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi ipsa voluptatum atque dolor magnam!</p>
            <button onClick={formOpenHandler} className='special_button'>Check for Price</button>
        </div>
        <div className={styles.items}>
        {configuration.map((item,index)=> (
            <div className={styles.item}>
                <div className={styles.overlay}></div>
                <p className={styles.item_heading}>{item.type}</p>
                <img src="/Images/1bhk.jpg" alt="" />
                <div className={styles.item_desc}>
                    <p>Carpet (Sq. Ft)</p>
                    <p><b>{item.size} sq. ft.</b></p>
                </div>
            </div>
        ))}
          
          
        </div>
    </section>
    </>
  
  )
}

export default ProjectConfigurations