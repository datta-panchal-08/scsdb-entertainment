import React from "react";
import { Link } from "react-router-dom";
import noimage from '/noimage.jpg'
const HorizontalCards = ({data}) => {
  return (
    <div className="w-[100%] px-5 overflow-y-hidden flex">
      { data.length > 0 ? data.map((item, index) => (
        <Link to={`/${item.media_type}/details/${item.id}`} key={index} className=" min-w-[15%] bg-zinc-900 mr-5 mb-5 h-[35vh] overflow-y-auto">
          <img
            className="h-[55%] w-full object-cover"
            src={ item.backdrop_path || item.poster_path ? `https://image.tmdb.org/t/p/original/${
              item.backdrop_path || item.poster_path
            }`:noimage}
            alt=""
          />
          <div className="text-white p-1 mb-5">
            <h1 className="text-sm font-semibold text-white">
              {item.title ||
                item.original_title ||
                item.name ||
                item.original_name}
            </h1>
            <p className="w-full text-sm">
              {item?.overview?.slice(0, 50)}...{" "}
              <span className="text-zinc-500">more</span>
            </p>
          </div>
        </Link>
      )):<h1 className="text-3xl text-white font-black text-center">Nothing To Show</h1>}
    </div>
  )
};

export default HorizontalCards;
