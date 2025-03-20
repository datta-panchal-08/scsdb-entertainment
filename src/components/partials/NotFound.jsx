import React from 'react'
import { useLocation } from 'react-router-dom'
const NotFound = () => {
  const {pathname} = useLocation();
   
  return pathname !== "/trailer" &&(
    <div className='w-screen h-screen flex items-center justify-center bg-black'>
          <img src="https://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif" className='h-[70%] w-[70%] object-cover'/>
    </div>
  )
}

export default NotFound