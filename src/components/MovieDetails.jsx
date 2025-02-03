import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadMovie } from "../store/actions/MovieActions";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { removeMovie } from "../store/reducers/MovieSlice";
import Spinner from "../components/partials/Spinner";
import HorizontalCards from './partials/HorizontalCards'
import noimage from "/noimage.jpg"
const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { info } = useSelector((state) => state.movie);
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(asyncLoadMovie(id));
    return () => {
      dispatch(removeMovie());
    };
  },[id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.5), rgba(0,0,0,.9)), 
                   url(https://image.tmdb.org/t/p/original/${
                     info.details.backdrop_path || info.details.poster_path
                   })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen relative h-screen px-[5%] pb-4 text-zinc-100 overflow-y-auto"
    >
      {/* Navigation */}
      <nav className="w-full flex gap-10 text-xl items-center h-[13vh]">
        <Link className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigation(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          <small className="ml-1 font-semibold text-sm"></small>
        </Link>
        <a target="_blank" href={info.details.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
        >
          imdb
        </a>
      </nav>

      {/* Poster */}
      <div className="w-full mb-5 flex">
        <div className=" flex flex-col items-center justify-start min-w-[18%] mr-30">
          <img
            className=" shadow-[8px_17px_38px_2px_rgba(0,0,0,.7)] h-[40vh] object-cover"
            src={
              info.details.backdrop_path || info.details.poster_path
                ? `https://image.tmdb.org/t/p/original/${
                    info.details.backdrop_path || info.details.poster_path
                  }`
                : noimage
            }
            alt=""
          />

          <div className="w-fit flex flex-col gap-y-5 mt-5">
            {info.watchproviders && info.watchproviders.flatrate && (
              <div className="flex items-center text-white gap-x-2">
                <h1  className="text-nowrap">Available on Platforms</h1>
                {info.watchproviders.flatrate.map((item, i) => {
                  return (
                    <img
                      title={item.provider_name}
                      className="w-[5vh] h-[5vh] ml-2 rounded-md mt-2 object-cover"
                      key={i}
                      src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                      alt=""
                    />
                  );
                })}
              </div>
            )}

            {info.watchproviders && info.watchproviders.rent && (
              <div className="flex items-center text-white gap-x-2">
                <h1 className="text-nowrap">Available on Rent</h1>
                {info.watchproviders.rent.map((item, i) => {
                  return (
                    <img
                      title={item.provider_name}
                      className="w-[5vh] h-[5vh] ml-2 rounded-md mt-2 object-cover"
                      key={i}
                      src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                      alt=""
                    />
                  );
                })}
              </div>
            )}

            {info.watchproviders && info.watchproviders.buy && (
              <div className="flex items-center text-white gap-x-2">
                <h1 className="text-nowrap">Available to Buy</h1>
                {info.watchproviders.buy.map((item, i) => {
                  return (
                    <img
                      title={item.provider_name}
                      className="w-[5vh] h-[5vh] ml-2 rounded-md mt-2 object-cover"
                      key={i}
                      src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                      alt=""
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div className="content ml-[4%] text-white">
          <h1 className="text-4xl font-black mt-3 ">
            {info.details.title ||
              info.details.original_title ||
              info.details.name ||
              info.details.original_name}

            <small className="text-2xl font-bold text-zinc-300">
              ({info.details.release_date.split("-")[0]})
            </small>
          </h1>

          <div className="flex items-center gap-x-4">
            <span
              className={`flex items-center text-lg justify-center h-[7vh] w-[7vh]  font-semibold rounded-full bg-yellow-600`}
            >
              {info.details.vote_average.toFixed() * 10}
              <sup>%</sup>
            </span>

            <h1 className="mt-3 mb-5 text-xl w-[60px] font-semibold leading-5">
              {" "}
              User Score{" "}
            </h1>
            <h1> ({info.details.release_date}) </h1>
            <h1>{info.details.genres.map((g) => g.name).join(",")}</h1>
            <h1>{info.details.runtime}min</h1>
          </div>

          <h1 className="text-xl italic font-semibold">
            {info.details.tagline}
          </h1>

          <h1 className="text-2xl mt-3 mb-3">Overiew</h1>
          <p>{info.details.overview}</p>

          <h1 className="text-2xl mt-3 mb-3">Movie Translated In</h1>
          <p className="mb-5">
            {info.translations.map((t) => t.english_name).join(", ")}
          </p>
           {
            info.videos &&   <Link
            className="px-4 py-3 rounded-lg bg-[#6556CD]"
            to={`${pathname}/trailer`}
          >
            <i className="ri-play-large-fill mr-1 text-sm"></i> Play Trailer
          </Link>
           }
        </div>
      </div>

      {/* Part  3 Recommndations and similar */}
      <hr className="mt-4 mb-3 border-none h-[1px] bg-zinc-200" />
      <h1 className="font-bold text-white text-2xl mb-3">Recommendations & Similar</h1>
      <HorizontalCards data={info.recommendations.length > 0 ? info.recommendations: info.similar} />

     <Outlet/>

    </div>
  ) : (
    <Spinner />
  );
};

export default MovieDetails;
