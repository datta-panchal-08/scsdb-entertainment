
import { Link } from "react-router-dom";
const Sidenav = () => {
  return (
    <div className="w-[20%] h-full border-zinc-400 border-r-1 p-3">
      <h1 className="text-2xl font-bold text-white">
        <i className="text-[#6556CD] mr-2 ri-tv-fill "></i>
        <span>SCSDB.</span>
      </h1>
      <nav className="flex flex-col text-xl text-zinc-400 gap-2">
        <h1 className="text-white font-semibold text-xl mt-10 mb-3">
          New Feeds
        </h1>
        <Link to={"/trendings"} className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 duration-300 ">
          <i className="mr-2 ri-fire-fill"></i>Trending
        </Link>
        <Link to={"/popular"} className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 duration-300 ">
          <i className="mr-2 ri-bard-fill"></i>Popular
        </Link>
        <Link to={"/movies"} className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 duration-300 ">
          <i className="mr-2 ri-movie-2-fill"></i>Movies
        </Link>
        <Link to={"/tv"} className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 duration-300 ">
          <i className="mr-2 ri-tv-2-fill"></i>Tv Shows
        </Link>
        <Link  to={"/persons"} className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 duration-300 ">
          <i className="mr-2 ri-team-fill"></i>People
        </Link>
      </nav>

      <hr className="border-none bg-zinc-400 h-[1px] mt-1" />
      <nav className="flex flex-col text-xl text-zinc-400 gap-2">
        <h1 className="text-white font-semibold text-xl mt-5">
          Website Information{" "}
        </h1>
        <Link to={'/about'} className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 duration-300 ">
        <i className="mr-2 ri-information-fill"></i>About SCSDB
        </Link>
        <Link to={"/contact"} className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 duration-300 ">
        <i className="ri-phone-fill mr-2"></i>Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
