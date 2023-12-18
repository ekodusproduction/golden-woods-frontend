import React from 'react'
import { Player } from 'video-react';
import 'video-react/dist/video-react.css'
import { publicURL } from '../../api/axiosConfig';
import './VideoSection.css'
const VideoSection = ({video}) => {
  return (
  
    <div className='video_container'>
         <Player>
            <source src={`${publicURL}${video}`} />
        </Player>
    </div>
  
  )
}

export default VideoSection