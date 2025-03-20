import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import noimage from "/noimage.jpg";
import {
  useLocation,
  useNavigate,
  useParams,
  Link,
  Outlet,
} from "react-router-dom";
import { removeTvShow } from "../store/reducers/TvSlice";
import { asyncLoadTv } from "../store/actions/TvActions";
import Spinner from "./partials/Spinner";
import HorizontalCards from "./partials/HorizontalCards";

const TvDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { info } = useSelector((state) => state.tv);
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(asyncLoadTv(id));
    return () => {
      dispatch(removeTvShow());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.5), rgba(0,0,0,.9)), 
                   url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path || info.details.poster_path
          })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen relative h-screen pb-4 px-[5%] text-zinc-100 overflow-y-auto"
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
      <div className="w-full mb-5 flex md:flex-row flex-col">
        <div className=" flex flex-col md:items-center md:justify-start w-full  md:min-w-[25%] md:mr-20">
          <img
            className=" shadow-[8px_17px_38px_2px_rgba(0,0,0,.7)] w-full md:min-w-[25%] h-[50vh] md:h-[40vh] object-cover"
            src={
              info.details.backdrop_path || info.details.poster_path
                ? `https://image.tmdb.org/t/p/original/${info.details.backdrop_path || info.details.poster_path
                }`
                : noimage
            }
            alt=""
          />

          <div className="w-full md:w-fit text-nowrap flex flex-col overflow-x-auto md:overflow-x-hidden gap-y-5 mt-5">
            {info.watchproviders && info.watchproviders.flatrate && (
              <div className="flex items-center text-white gap-x-2">
                <h1 className="md:text-nowrap sm:text-sm">Available on Platforms</h1>
                {info.watchproviders.flatrate.map((item, i) => {
                  return (
                    <img
                      title={item.provider_name}
                      className="w-[3rem] h-[3rem] md:w-[5vh] md:h-[5vh] ml-2 rounded-md mt-2 object-cover"
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
                      className="w-[3rem] h-[3rem] md:w-[5vh] md:h-[5vh] ml-2 rounded-md mt-2 object-cover"
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
                      className="w-[3rem] h-[3rem] md:w-[5vh] md:h-[5vh] ml-2 rounded-md mt-2 object-cover"
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

        <div className="content  text-white">
          <h1 className="md:text-4xl text-2xl font-black mt-3 ">
            {info.details.title ||
              info.details.original_title ||
              info.details.name ||
              info.details.original_name}

            <small className="md:text-2xl text-xl  font-bold text-zinc-300">
              ({info.details.first_air_date.split("-")[0]})
            </small>
          </h1>

          <div className=" flex flex-col mt-2 md:mt-0 gap-3 md:gap-0 md:flex-row md:items-center gap-x-4">
             <div className="flex items-center space-x-3">
             <span
              className={`flex items-center text-lg justify-center h-[3.5rem] w-[3.5rem] md:h-[7vh] md:w-[7vh] font-semibold rounded-full bg-yellow-600`}
            >
              {info.details.vote_average.toFixed() * 10}
              <sup>%</sup>
            </span>

            <h1 className="mt-3 mb-5 text-xl w-[60px] font-semibold leading-5">
              User Score
            </h1>
             </div>
            <div className="md:flex-row flex flex-col md:gap-10">
              <h1> ({info.details.first_air_date}) </h1>
              <h1>{info.details.genres.map((g) => g.name).join(",")}</h1>
              <h1>Episodes ({info.details.number_of_episodes})</h1>
            </div>
          </div>

          <h1 className="text-xl italic font-semibold">
            {info.details.tagline}
          </h1>

          {info.details.overview && (
            <h1 className="text-2xl mt-3 mb-3">Overiew</h1>
          )}
          <p>{info.details.overview}</p>
          <h1 className="text-2xl mt-3 mb-3">Show Translated In</h1>
          <p className="mb-5">
            {info.translations.map((t) => t.english_name).join(", ")}
          </p>
          {info.videos && (
            <Link
              className="px-4 py-3 rounded-lg bg-[#6556CD]"
              to={`${pathname}/trailer`}
            >
              <i className="ri-play-large-fill mr-1 text-sm"></i> Play Trailer
            </Link>
          )}
        </div>
      </div>
      <hr className="mt-4 mb-3 border-none h-[1px] bg-zinc-200" />
      <h1 className="font-bold text-white text-2xl text-left mb-3">Seasons</h1>
      <div className="w-full px-5 md:overflow-x-auto md:overflow-y-hidden pb-[4%]  mb-2  flex flex-col md:flex-row gap-10 md:gap-0">
        {info.details.seasons.length > 0 &&
          info.details.seasons.map((item, index) => {
            return (
              <div key={index} className="w-[100%] md:min-w-[15%] h-fit md:h-[40vh] mr-4">
                <h1 className="text-sm text-white font-black mb-1">
                  {item.name.split(" ").slice(0, 2).join(" ")}
                </h1>
                <img
                  className=" shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] w-full md:w-[13vw] h-[45vh] md:h-[37vh] object-cover"
                  src={
                    item.backdrop_path || item.poster_path || item.profile_path
                      ? `https://image.tmdb.org/t/p/original/${item.backdrop_path ||
                      item.poster_path ||
                      item.profile_path
                      }`
                      : noimage
                  }
                  alt=""
                />
                <h1 className="mt-1 text-white font-black text-sm ">
                  Episodes({item.episode_count})
                </h1>
              </div>
            );
          })}
      </div>

      {/* Part  3 Recommndations and similar */}
      <hr className="mt-4 mb-3 border-none h-[1px] bg-zinc-200" />
      <h1 className="font-bold text-white text-2xl text-left mb-3">
        Recommendations & Similar
      </h1>
      <HorizontalCards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />

      <Outlet />
    </div>
  ) : (
    <Spinner />
  );
};

export default TvDetails;
