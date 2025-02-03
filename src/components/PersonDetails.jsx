import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { asyncperson } from "../store/actions/PersonActions";
import { removePerson } from "../store/reducers/Personslice";
import noimage from "/noimage.jpg";
import Spinner from "./partials/Spinner";
import PersonCardMovies from "./partials/PersonCardMovies";

const PersonDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.person);
  const navigation = useNavigate();
  useEffect(() => {
    dispatch(asyncperson(id));
    return () => {
      dispatch(removePerson());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.5), rgba(0,0,0,.9)), 
                 url(https://image.tmdb.org/t/p/original/${
                   info.details.backdrop_path ||
                   info.details.poster_path ||
                   info.details.profile_path
                 })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen h-screen text-white px-[5%] pb-4 overflow-y-auto"
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
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.external_ids.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/name/${info.external_ids.imdb_id}`}
        >
          imdb
        </a>
      </nav>

      {/* Main Content */}
      <div className="flex w-full h-fit overflow-y-auto mt-3">
        {/* Profile Image */}
        <div className="min-w-[18%] h-fit flex-col relative gap-4 mr-20 ">
          <img
            className=" shadow-[8px_17px_38px_2px_rgba(0,0,0,.7)] h-[40vh] w-full object-cover"
            src={
              info.details.backdrop_path ||
              info.details.poster_path ||
              info.details.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    info.details.backdrop_path ||
                    info.details.poster_path ||
                    info.details.profile_path
                  }`
                : noimage
            }
            alt=""
          />
          <hr className="border-none h-[2px] bg-zinc-300 mt-2 mb-2" />
          <div className="flex flex-col gap-2 px-3">
            <div className="social flex gap-3 text-xl items-center font-semibold ">
              {info.external_ids.instagram_id && (
                <a
                  href={`https://www.instagram.com/${info.external_ids.instagram_id}`}
                  className="ri-instagram-fill text-xl font-semibold text-zinc-300"
                ></a>
              )}
              {info.external_ids.twitter_id && (
                <a
                  href={`https://x.com/${info.external_ids.twitter_id}`}
                  target="_blank"
                  className="ri-twitter-x-fill text-xl font-semibold text-zinc-300"
                ></a>
              )}
              {info.external_ids.tiktok_id && (
                <a
                  href={`https://www.tiktok.com/@${info.external_ids.tiktok_id}`}
                  target="_blank"
                  className="ri-tiktok-fill text-xl font-semibold text-zinc-300"
                ></a>
              )}

              {info.external_ids.facebook_id && (
                <a 
                  href={`https://www.facebook.com/${info.external_ids.facebook_id}`}
                  className="ri-facebook-circle-fill text-xl font-semibold text-zinc-300"
                ></a>
              )}
            </div>
            <h3 className="text-xl font-semibold text-zinc-300">Known For : {info.details.known_for_department} </h3>
            <h3 className="text-xl font-semibold text-zinc-300">Born In : {info.details.birthday}</h3>
            {
             info.details.deathday ?  <h3 className="text-xl font-semibold text-zinc-300">Passed Away: {info.details.deathday}</h3> : <h3 className="text-xl font-semibold text-zinc-300">Alive</h3>
            }
          </div>
        </div>

        {/* Details */}

        <div>
          <h1 className="text-4xl font-black mb-1">{info.details.name}</h1>
          <h2 className="">
            {" "}
            <span className="text-xl font-semibold">Also Know As : </span>
            <span className="tex-xs">
              {info.details.also_known_as.map((item, i) => item).join(", ")}
            </span>{" "}
          </h2>
          <h1 className="mt-3 text-xl ">
            Birth Place : {info.details.place_of_birth}
          </h1>
          <h1 className="mt-3  text-2xl">Biography</h1>
          <p className="mt-1">{info.details.biography}</p>
        </div>
      </div>

      <hr className="border-none h-[2px] bg-zinc-400 mt-3 mb-3" />

      {/* Casting Details */}
      <h1 className="text-2xl font-semibold">Movie Credits</h1>
      <div className="w-full flex overflow-y-hidden overflow-x-auto mt-2 pb-5">
        {info.movie_credits.cast.length > 0 ? (
          info.movie_credits.cast.map((item, index) => {
            return <PersonCardMovies item={item} title={"movie"} key={index} />;
          })
        ) : (
          <h1 className="text-3xl font-semibold">Nothing To Show</h1>
        )}
      </div>

      <hr className="border-none h-[2px] bg-zinc-400 mt-3 mb-3" />

      {/* Tv Credits */}
      <h1 className="text-2xl font-semibold">Tv Credits</h1>
      <div className="w-full flex overflow-y-hidden overflow-x-auto mt-2 pb-5">
        {info.tv_credits.cast.length > 0 ? (
          info.tv_credits.cast.map((item, index) => {
            return <PersonCardMovies item={item} title={"tv"} key={index} />;
          })
        ) : (
          <h1 className="text-3xl font-semibold">Nothing To Show</h1>
        )}
      </div>
    </div>
  ) : (
    <Spinner />
  );
};

export default PersonDetails;
