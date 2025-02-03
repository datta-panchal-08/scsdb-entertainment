import React from "react";
import ReactPlayer from "react-player/youtube";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

const Trailer = () => {
  const { pathname } = useLocation();
  const navigation = useNavigate();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);
  
  return ytvideo.key ? (
    <div className="absolute z-[99999] bg-[rgba(0,0,0,.8)] top-0 left-0 w-screen h-screen flex items-center justify-center">
      <Link
        className="absolute hover:text-[#6556CD] right-[5%] top-[5%] text-3xl ri-close-line font-semibold text-zinc-400"
        onClick={() => navigation(-1)}
      ></Link>
      <ReactPlayer
        height={500}
        width={1120}
        url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
        controls={true}
      ></ReactPlayer>
    </div>
  ) : (
    <NotFound />
  );
};

export default Trailer;
