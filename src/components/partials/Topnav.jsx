import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "../../utils/axios";
import noimage from '/noimage.jpg';

const Topnav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);
  const { pathname } = useLocation();
  const hideSearchBoxPaths = ['/trendings', '/popular', '/tv', '/movies', '/persons'];

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
    <div className="w-[100%] px-5 md:px-0 md:w-[80%] h-[10vh] relative flex mx-auto items-center">
      {
        !hideSearchBoxPaths.includes(pathname) ? (
          <div className={`md:block  ${pathname === '/' ? 'block':'hidden'}`}>
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
          </div>
        ) : (
          <div className="md:block hidden">
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
          </div>
        )
      }
      
      <div className="md:w-[50%] w-[75%] max-h-[30vh] md:max-h-[50vh] bg-zinc-200 z-[9999] absolute top-[100%] left-[6%] overflow-auto">
        {searches.map((result, index) => {
          return (
            <Link to={`/${result.media_type}/details/${result.id}`}
              key={index}
              className="w-[100%] hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 flex items-center justify-start border-b-2 border-zinc-100 p-5"
            >
              <img
                className="object-cover rounded mr-10 h-[10vh] w-[10vh] shadow-lg"
                src={result.poster_path ||
                  result.backdrop_path ||
                  result.profile_path ? `https://image.tmdb.org/t/p/original/${result.poster_path ||
                result.backdrop_path ||
                result.profile_path
                }` : noimage}
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
