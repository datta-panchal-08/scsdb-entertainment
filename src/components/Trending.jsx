import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import axios from '../utils/axios';
import Card from './partials/Card';
import Spinner from './partials/Spinner';
const Trending = () => {
  const navigation = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  document.title = 'SCSDB | Trending';
  const getCategoriesByDuration = async () => {
    try {
      let { data } = await axios.get(`/trending/${category}/${duration}`)
      setTrending(data.results);

    } catch (error) {
      console.log("Error : ", error);
    }
  }

  useEffect(() => {
    getCategoriesByDuration();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className='w-screen h-screen bg-[#1F1E24] overflow-y-auto'>

      <div className='w-full flex items-center justify-between p-[2%]'>
        <h1 className='md:text-2xl text-xl font-semibold text-zinc-400'>
          <i onClick={() => navigation(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></i>Trending  <small className='ml-1 font-semibold text-sm'>
            ({category})
          </small>
        </h1>
        <div className='flex items-center w-[80%]'>
          <Topnav />
          <Dropdown title={"Category"} options={["tv", "movie", "all"]} setCategory={setCategory} />
          <div className='ml-[2%]'></div>
          <Dropdown title={"Duration"} options={["day", "week"]} setCategory={setDuration} />
        </div>

      </div>

      <Card data={trending} title="category" />

    </div>
  ) : <Spinner />
}

export default Trending