import { useEffect,useState } from "react"
import styles from "./ProjectAmenities.module.css"
import axiosConfig from '../../api/axiosConfig'
import { publicURL } from "../../api/axiosConfig"
import Marquee from "react-fast-marquee";
const ProjectAmenities = ({projectId}) => {
    const [amenity,setAmenity] = useState([])

    useEffect(()=> {
 
        axiosConfig.get(`/project/amenity/get/${projectId}`)
        .then(response => {
          const responseData = response.data;
          return JSON.parse(JSON.stringify(responseData.data));
        })
        .then(data => {
          console.log(data)
          setAmenity(data)
         
        })
      
      
      },[])
    //   console.log( projectInfo.project?.projectName)

  return (
    <section className={styles.container}>
        <h2 className={styles.header}>Amenities</h2>
        {/* <div className={styles.content}>
                {amenity.map((item,index)=> (
                         <div className={styles.content_card}>
                         <img src={`${publicURL}${item.amenityImage}`} alt="" className={styles.icon} />
                         <h3>{item.amenityName}</h3>
                     </div>
                ))}
            
        </div> */}
         <Marquee>
     
                {amenity.map((item,index)=> (
                        <div className={styles.content_card}>
                         <img src={`${publicURL}${item.amenityImage}`} alt="" className={styles.icon} />
                         <h3>{item.amenityName}</h3>
                     </div>
                ))}
            
       
        </Marquee>
    </section>
  )
}

export default ProjectAmenities