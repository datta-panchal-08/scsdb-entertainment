import React, { useEffect, useState } from 'react'
import axios from '../utils/axios';
import Dropdown from './partials/Dropdown';
import Topnav from './partials/Topnav';
import Card from './partials/Card';
import { useNavigate } from 'react-router-dom';
import Spinner from './partials/Spinner';
const TvShows = () => {
    const [category,setCategory] = useState("airing_today");
    const [tvShows,setTvShows] = useState([]);
    document.title = "SCSDB | Tv";
    const navigation = useNavigate();
    const getTvShows = async()=>{
        try {
            let {data} = await axios.get(`/tv/${category}`);
            setTvShows(data.results);
        } catch (error) {
            console.log("Error: ",error);
        }
    }

    useEffect(()=>{
        getTvShows();
    },[category]);

  return tvShows.length > 0 ? (
    <div className="w-screen h-screen  overflow-y-auto bg-[#1F1E24]">
    <div className="w-full flex items-center justify-between p-[2%]">
      <h1 className="md:text-2xl text-xl font-semibold text-zinc-400">
        <i
          onClick={() => navigation(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line"
        ></i>
        Tv Shows <small className='ml-1 font-semibold text-sm'>
                ({category})
              </small>
      </h1>
      <div className="flex items-center w-[80%]">
        <Topnav />
        <Dropdown
          title={"Category"}
          options={["popular","top_rated","on_the_air"]}
          setCategory={setCategory}
        />
      </div>
    </div>
    <Card data={tvShows} title={"tv"} />
  </div>
  ):<Spinner/>
}

export default TvShows