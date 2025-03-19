import React from "react";
import { Link } from "react-router-dom";
const Header = ({ data }) => {

  return (
    <Link to={`/${data.media_type}/details/${data.id}`}
      style={{
        background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.8)), 
                     url(https://image.tmdb.org/t/p/original/${
                       data.backdrop_path || data.poster_path
                     })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat:"no-repeat"
      }}
      className="w-full md:h-[50vh] h-[60vh] mt-5 flex flex-col justify-end items-start p-[5%] text-white"
    >
      <h1 className="md:text-4xl text-xl text-white font-bold">
      {data.original_title || data.name || data.title}
      </h1>
      <p className="md:w-[70%] w-[95%] mt-3 mb-3">{data.overview.slice(0,150)}</p>
        <p>
      <i className="text-yellow-500 ri-megaphone-fill"></i>{data.release_date || data.first_air_date || "No Information"}
      <i className="text-yellow-500 ml-5  ri-album-fill"></i>{data.media_type}
        </p>
    </Link>
  );
};

export default Header;
