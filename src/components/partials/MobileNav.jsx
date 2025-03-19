import React from 'react'
import { Link } from 'react-router-dom'

const MobileNav = () => {
  return (
    <div className='w-[100%] mt-1 px-3 flex items-center gap-3 md:hidden h-[5vh]'>
      <h1 className="text-[1.1rem] font-bold text-white">
        <i className="text-[#6556CD] mr-2 ri-tv-fill "></i>
        <span>SCSDB.</span>
      </h1>
         <Link to={"/trendings"} className="text-white text-[0.8rem] hover:text-[#6556CD] font-semibold ">
         Trending
        </Link>

          <Link to={"/popular"} className="text-white text-[0.8rem] hover:text-[#6556CD] font-semibold " >
          Popular
        </Link>

          <Link to={"/movies"} className="text-white text-[0.8rem] hover:text-[#6556CD] font-semibold " >
          Movies
        </Link>

        
        <Link to={"/tv"} className="text-white text-[0.8rem] hover:text-[#6556CD] font-semibold " >
          Tv
        </Link>

        
        <Link to={"/persons"} className="text-white text-[0.8rem] hover:text-[#6556CD] font-semibold " >
          People
        </Link>

    </div>
  )
}

export default MobileNav