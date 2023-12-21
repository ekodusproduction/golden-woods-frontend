import React from 'react'
import { Player } from 'video-react';
import 'video-react/dist/video-react.css'
import { publicURL } from '../../api/axiosConfig';
import './VideoSection.css'
const VideoSection = ({video,thumbnail}) => {
  return (
  
    <div className='video_container'>
         <Player poster={`${publicURL}${thumbnail}`}>
            <source src={`${publicURL}${video}`} />
        </Player>
    </div>
  
  )
}

export default VideoSection