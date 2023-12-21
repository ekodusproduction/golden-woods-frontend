import React,{useState} from 'react'
import styles from './ProjectExterior.module.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import { publicURL } from '../../api/axiosConfig';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";




const ProjectExterior = ({exteriorImages}) => {
    const [imageIndex, setImageIndex] = useState(0);
    
    const imgslides = exteriorImages.map(item => {
        return {src: `${publicURL}${item.image}`}
    })
  

    const [isOpen, setIsOpen] = useState(false);
    const newexteriorImages = Array.from({ length: Math.ceil(exteriorImages.length / 6) }, (_, index) =>
    exteriorImages.slice(index * 6, (index + 1) * 6)
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
    <section className={styles.container}>
        <div className={styles.content_exterior}>
            <div className={styles.text_content}>
                <p className={styles.subhead}>Exterior</p>
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
                    {newexteriorImages.map((items,outerIndex) => (
                        <SplideSlide>
                        <div className={styles.perSlide}>
                            {items.map((item,innerIndex)=> (
                                <>
                                <img src={`${publicURL}${item.image}`} key={item.id} alt="Image 1" onClick={()=>galleryHandler(outerIndex,innerIndex)}/>
                                </>
                            ))}     
                        </div>
                    </SplideSlide>
                    ))} 
                </Splide>
            </div>


            <div className={styles.slider_mobile}>
                <Splide aria-label="My Favorite Images" options={{ perPage: 1, pagination: true }}>
                    {exteriorImages.map((item, index) => (
                    
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
             open={isOpen}
            close={handleGalleryClose}
            slides={[imgslides[imageIndex]]} 
        />
      
       
    </section>
  )
}


export default ProjectExterior