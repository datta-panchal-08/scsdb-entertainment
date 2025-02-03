import React, { useEffect, useState } from 'react'
import axios from "../utils/axios";
import { useNavigate } from 'react-router-dom';
import Dropdown from './partials/Dropdown';
import Topnav from './partials/Topnav';
import Card from './partials/Card';
import Spinner from './partials/Spinner';
const Movies = () => {
    const [category,setCategory] = useState("now_playing");
    const [movies,setMovies] = useState([]);
    const navigation = useNavigate();
    document.title = "SCSDB | Movies";
    
    const getPopularMovies = async () =>{
        try {
            let {data} = await axios.get(`/movie/${category}`);
            setMovies(data.results);
        } catch (error) {
            console.log("Error : ",error);
        }
    }

    useEffect(()=>{
        getPopularMovies();
    },[category])

  return movies.length > 0 ? (
    <div className="w-screen h-screen  overflow-y-auto bg-[#1F1E24]">
    <div className="w-full flex items-center justify-between p-[2%]">
      <h1 className="text-2xl font-semibold text-zinc-400">
        <i
          onClick={() => navigation(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line"
        ></i>
        Movies  <small className='ml-1 font-semibold text-sm'>
                ({category})
              </small>
      </h1>
      <div className="flex items-center w-[80%]">
        <Topnav />
        <Dropdown
          title={"Category"}
          options={["popular","top_rated","upcoming"]}
          setCategory={setCategory}
        />
      </div>
    </div>
    <Card data={movies} title={"movie"} />
  </div>
  ):<Spinner/>
}

export default Movies