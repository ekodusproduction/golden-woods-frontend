import React,{useState} from 'react'
import styles from './ProjectInterior.module.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import { publicURL } from '../../api/axiosConfig';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ProjectInterior = ({interiorImages}) => {
  const [imageIndex, setImageIndex] = useState(0);
 
  const imgslides = interiorImages.map(item => {
    return {src: `${publicURL}${item.image}`}
})
const [isOpen, setIsOpen] = useState(false);
const newinteriorImages = Array.from({ length: Math.ceil(interiorImages.length / 6) }, (_, index) =>
interiorImages.slice(index * 6, (index + 1) * 6)
);
const galleryHandler = (outerIndex,innerIndex) => {
  const calculatedIndex = outerIndex * 6 + innerIndex;
  setImageIndex(calculatedIndex)

  setIsOpen(true);
}
const handleGalleryClose = () => {
  setIsOpen(false);
}

  return (
    <>
        {newinteriorImages.length>0 && 
        <section className={styles.container}>
        <div className={styles.content_interior}>
            <div className={styles.text_content}>
                <p className={styles.subhead}>Interior</p>
                <h2 className={styles.head}>Human-Centered Design Friendly Spaces</h2>
                <p className={styles.info}>Flexible, Contemporary Spaces. We design and
                    service the next generation building. Our design
                    philosophy and continuous improvement
                    methodology aims to enhance the experience of
                    every user of our spaces</p>
            </div>
            <div className={styles.slider}>
                <Splide aria-label="My Favorite Images"
                options={{perPage:1}}>
                    {newinteriorImages.map((items,outerIndex) => (
                        <SplideSlide key={outerIndex}>
                        <div className={styles.perSlide}>
                            {items.map((item,innerIndex)=> (
                               
                                <img src={`${publicURL}${item.image}`} key={item.id} alt="Interior image" loading='lazy' onClick={()=>galleryHandler(outerIndex,innerIndex)}/>
                              
                            ))}     
                        </div>
                    </SplideSlide>
                    ))} 
                </Splide>
            </div>


            <div className={styles.slider_mobile}>
                <Splide aria-label="My Favorite Images" options={{ perPage: 1, pagination: true }}>
                    {interiorImages.map((item, index) => (
                    
                        <SplideSlide key={index}>
                            <img
                            src={`${publicURL}${item.image}`}
                            key={item.id}
                            alt={`Image ${index}`}
                            onClick={() => galleryHandler(0,index)}
                            />
                        </SplideSlide>
                    
                   
                    ))}
                </Splide>
            </div>

        </div>
        
       
        <Lightbox
            index={imageIndex}
             open={isOpen}
            close={handleGalleryClose}
            slides={imgslides} 
        />
      
       
    </section>
        
        }
    </>
    
  )
}

export default ProjectInterior