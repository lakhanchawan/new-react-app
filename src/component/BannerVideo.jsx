import React from 'react'
import video from '../assets/bannervideo.mp4'; 
import '../App.css'

export const BannerVideo = () => {
  return (
    <div>
      <video src={video} className="responsive-video" 
        autoPlay
        muted
        loop
        playsInline>
      </video>
    </div>
  )
}
