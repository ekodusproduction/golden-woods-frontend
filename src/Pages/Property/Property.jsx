import React, {useState, useEffect} from 'react'
import ReactPaginate from 'react-paginate';
import styles from './Property.module.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import axiosConfig from '../../api/axiosConfig'
import Loader from '../../components/Loader/Loader';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';

const Property = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [allProjects, setAllProjects] = useState([]);

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  useEffect(()=> {
    axiosConfig.get('/project/list')
    .then(response => {
      const responseData = response.data;
      return JSON.parse(JSON.stringify(responseData.data.data));
    })
    .then(data => {
      console.log(data)
      setAllProjects(data)
    })
  },[])

  return (
   <>
    {allProjects.length>0 ? 
      <div>
            <Navbar/>
            <Header title={'Properties'}/>
            <div className={styles.container}> 
                <div className={styles.header}>
                  <h2>Explore Our Projects</h2>
                </div>
                <p className={styles.property_desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit corporis et optio! Deserunt, consectetur. Qui iure doloribus magnam sequi ex facilis minus ipsum repudiandae eius tenetur nam, suscipit, excepturi nostrum unde! Veniam tempore laborum assumenda, ea quas expedita possimus harum! Aspernatur magni explicabo tenetur dolorum, sed numquam totam tempora quidem iusto minima</p>
                <div className={styles.content}>
                    <div className={styles.projects_container}>
                      
                      <Splide aria-label="My Favorite Images"  style={{padding: 0}}  options={{
                          perPage: 2,
                          breakpoints: {
                            756: {
                              perPage: 1,
                            },
                          },
                          pagination:'true',
                          type    :'loop',
                          autoplay: true,
                        }} >
                         
                          {allProjects.map((project )=> (
                              <SplideSlide>
                            <ProjectCard key={project.id} projectInfo={project}/>
                            </SplideSlide>
                            
                          ))
                          }
                        </Splide>
                    </div>
                </div>
            </div>

            <Footer/>
            
            
      </div> : <Loader/> }
     
      </>
  )
}

export default Property
