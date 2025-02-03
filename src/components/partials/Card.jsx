import React from 'react'
import { Link } from 'react-router-dom'
import noimage from '/noimage.jpg'

const Card = ({data,title}) => {
  return (

    <div className='flex flex-wrap gap-9 w-full h-full px-[5%]'>
        {
            data.map((item,index)=>(
                <Link to={`/${item.media_type || title}/details/${item.id}`} className='relative w-[27vh] flex flex-col pb-2' key={index}>
                    <img className=' shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover' src={  item.backdrop_path || item.poster_path || item.profile_path ? `https://image.tmdb.org/t/p/original/${
                       item.backdrop_path || item.poster_path || item.profile_path
                     }`:noimage} alt="" />
                     <h1 className='text-sm font-semibold mt-3 text-zinc-300'>
              {
                    item.title || item.original_title || item.name || item.original_name
                }
              </h1>

                {
                  item.vote_average && <div className={`absolute bottom-[25%] right-[-11%] flex items-center text-xl
                    justify-center h-[6vh] w-[6vh] text-white font-semibold rounded-full bg-yellow-600`}>{item.vote_average?.toFixed() * 10}<sup>%</sup> </div>
                } 

                </Link>
            ))
        }
    </div>
  )
}

export default Card