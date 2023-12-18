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
                <div className={styles.content}>
                  <Tabs selectedIndex={selectedTab} onSelect={index => handleTabChange(index)}   >
                    <TabList className={styles.tablist}>
                        <Tab className={`${styles.tabItem} ${selectedTab === 0 ? styles.selectedTab : ''}`}   >All Projects</Tab>
                        <Tab className={`${styles.tabItem} ${selectedTab === 1 ? styles.selectedTab : ''} `}   >Ongoing Projects</Tab>
                        <Tab className={`${styles.tabItem} ${selectedTab === 2 ? styles.selectedTab : ''}`} >Upcoming Projects</Tab>
                        <Tab className={`${styles.tabItem} ${selectedTab === 3 ? styles.selectedTab : ''}`}   >Completed Projects</Tab>
                    </TabList>
                    <div className={styles.projects_container}>
                      <TabPanel>
                        <div className={styles.projects}>
                          {allProjects.map((project )=> (
                            <ProjectCard key={project.id} projectInfo={project}/>
                          ))
                          }
                        
                        </div>
                      </TabPanel>

                      <TabPanel>
                          {/* <ProjectCard/> */}
                      </TabPanel>

                      <TabPanel>
                          {/* <ProjectCard/> */}
                      </TabPanel>

                      <TabPanel>
                          {/* <ProjectCard/> */}
                      </TabPanel>
                    </div>
                    
                  </Tabs>
                </div>
            </div>

            <Footer/>
            
            
      </div> : <Loader/> }
     
      </>
  )
}

export default Property
