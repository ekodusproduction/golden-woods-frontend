import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const ComingSoon = () => {
  return (
    <>
        <Navbar/>
        <div style={{'width':'100%', 'height':'auto'}}>
            <img src="/Images/coming_soon.jpg" alt="" style={{'margin':'auto','width':'100%'}} />
        </div>
        <Footer/>
    </>
  )
}

export default ComingSoon