import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg";

const PersonCard = ({ item, title }) => {
  return (
    <Link
      to={`/${item.media_type || title}/details/${item.id}`}
      className="min-w-[16%] mr-4 h-[40vh]"
    >
      <img
        className="w-full h-full object-cover object-center"
        src={
          item.backdrop_path || item.poster_path || item.profile_path
            ? `https://image.tmdb.org/t/p/original/${
                item.backdrop_path || item.poster_path || item.profile_path
              }`
            : noimage
        }
        alt=""
      />
    </Link>
  );
};

export default PersonCard;
