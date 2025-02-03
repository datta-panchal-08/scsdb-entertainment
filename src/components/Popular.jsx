import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "./partials/Dropdown";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import Card from "./partials/Card";
import Spinner from "./partials/Spinner";

const Popular = () => {
    const navigation = useNavigate();
    const [category,setCategory] = useState("movie");
    const [popular,setPopular] = useState([]);
    document.title = "SCSDB | Popular";


    const getPopularShows = async () =>{
        try {
          let {data} = await axios.get(`/${category}/popular`);
          setPopular(data.results);
        } catch (error) {
            console.log("Error : ",error);
        }
    }

    useEffect(()=>{
      getPopularShows();        
    },[category]);

    console.log(popular);
    

  return popular.length > 0 ? (
      <div className="w-screen h-screen  overflow-y-auto bg-[#1F1E24]">
        <div className="w-full flex items-center justify-between p-[2%]">
          <h1 className="text-2xl font-semibold text-zinc-400">
            <i
              onClick={() => navigation(-1)}
              className="hover:text-[#6556CD] ri-arrow-left-line"
            ></i>
            Popular  <small className='ml-1 font-semibold text-sm'>
                ({category})
              </small>
          </h1>
          <div className="flex items-center w-[80%]">
            <Topnav />
            <Dropdown
              title={"Category"}
              options={["tv", "movie"]}
              setCategory={setCategory}
            />
          </div>
        </div>
        <Card data={popular} title={category} />
      </div>
  ):<Spinner/>
};

export default Popular;
