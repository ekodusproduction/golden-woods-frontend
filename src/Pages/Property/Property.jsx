import React, {useState, useEffect} from 'react'
import ReactPaginate from 'react-paginate';
import styles from './Property.module.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard'

const Property = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  return (
    <>
      <Navbar/>
      <Header title={'Properties'}/>
      <div className={styles.container}> 
          <div className={styles.header}>
            <h2>Explore Our Projects</h2>
          </div>
          <div className={styles.content}>
            <Tabs selectedIndex={selectedTab}   >
              <TabList className={styles.tablist}>
                  <Tab className={`${styles.tabItem} ${selectedTab === 0 ? styles.selectedTab : ''}`}  onClick={() => handleTabChange(0)} >All Projects</Tab>
                  <Tab className={`${styles.tabItem} ${selectedTab === 1 ? styles.selectedTab : ''} `}  onClick={() => handleTabChange(1)} >Ongoing Projects</Tab>
                  <Tab className={`${styles.tabItem} ${selectedTab === 2 ? styles.selectedTab : ''}`}  onClick={() => handleTabChange(2)} >Upcoming Projects</Tab>
                  <Tab className={`${styles.tabItem} ${selectedTab === 3 ? styles.selectedTab : ''}`}  onClick={() => handleTabChange(3)} >Completed Projects</Tab>
              </TabList>
              <div className={styles.projects_container}>
                <TabPanel>
                  <div className={styles.projects}>
                    <ProjectCard/>
                    <ProjectCard/>
                  </div>
                </TabPanel>

                <TabPanel>
                    <ProjectCard/>
                </TabPanel>

                <TabPanel>
                    <ProjectCard/>
                </TabPanel>

                <TabPanel>
                    <ProjectCard/>
                </TabPanel>
              </div>
              
            </Tabs>
          </div>
      </div>

      <Footer/>
    </>
  )
}

export default Property
