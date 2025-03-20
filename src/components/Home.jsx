import React, { useEffect, useState } from 'react'
import Sidenav from './partials/Sidenav'
import Topnav from './partials/Topnav'
import axios from '.././utils/axios'
import Header from './partials/Header'
import HorizontalCards from './partials/HorizontalCards'
import Dropdown from './partials/Dropdown'
import Spinner from './partials/Spinner'
import MobileNav from './partials/MobileNav'
import { useLocation } from 'react-router-dom'
const Home = () => {
    document.title = "SCSDB | Homepage";
    const [wallpaper, setWallpaper] = useState(null);
    const [trending,setTrending] = useState(null);
    const[category,setCategory] = useState("all");
    const {pathname} = useLocation();

    const getHeader = async () =>{
      try {
        let {data} = await axios.get("/trending/all/week");
        let randomdata = data.results[(Math.random()*data.results.length).toFixed()];        
        setWallpaper(randomdata);
      } catch (error) {
        console.log("Error : ",error);
      }
    }

    const getTrendings = async () =>{
      try {
        let {data} = await axios.get(`/trending/${category}/day`);
        setTrending(data.results);        
      } catch (error) {
        console.log("Error : ",error);
      }
    }



    useEffect(()=>{
      !wallpaper && getHeader();
      getTrendings();

    },[category]);

  return wallpaper && trending ?  (
    <>
    <Sidenav/>
    <div className='w-[100%] md:w-[80%] px-0 h-full overflow-hidden overflow-y-auto'>
    <MobileNav/>
       <div className={`${pathname === '/' ? 'hidden md:block':''}`}>
       <Topnav/>
       </div>
      <Header data={wallpaper}/>
      <div className='p-5 flex items-center gap-40 md:gap-80 justify-between'>
        <h1 className='md:text-2xl text-xl font-semibold text-zinc-400'>Trending</h1>
        <Dropdown title="Filter" options={["tv","movie","all"]} setCategory={setCategory} />
        </div>
      <HorizontalCards  data={trending}/>
    </div>
    </>
  ): <Spinner/>
}

export default Home