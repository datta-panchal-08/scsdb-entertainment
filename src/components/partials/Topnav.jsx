import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "../../utils/axios";
import noimage from '/noimage.jpg'
const Topnav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);
  
  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className="w-[80%] h-[10vh] relative flex  mx-auto items-center">
      <i className="text-2xl text-zinc-400 ri-search-2-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 outline-none border-none text-xl p-4 bg-transparent"
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <i
          className="cursor-pointer ri-close-fill text-2xl text-zinc-400"
          onClick={() => setquery("")}
        ></i>
      )}
      <div className="w-[50%] max-h-[50vh] bg-zinc-200 z-[9999] absolute top-[100%] left-[6%] overflow-auto">
        {searches.map((result, index) => {
          return (
            <Link to={`/${result.media_type}/details/${result.id}`}
              key={index}
              className="w-[100%] hover:text-black hover:bg-zinc-300 duration-300  font-semibold text-zinc-600 flex items-center justify-start border-b-2 border-zinc-100 p-5"
            >
              <img
                className="object-cover rounded mr-10 h-[10vh] w-[10vh] shadow-lg"
                src={   result.poster_path ||
                  result.backdrop_path ||
                  result.profile_path ? `https://image.tmdb.org/t/p/original/${
                  result.poster_path ||
                  result.backdrop_path ||
                  result.profile_path
                }`: noimage }
                alt=""
              />
              <span>
                {result.original_title || result.name || result.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Topnav;
