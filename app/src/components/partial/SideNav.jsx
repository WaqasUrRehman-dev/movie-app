import React from "react";
import { Link } from "react-router-dom";

export default function SideNav() {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-10">
      <h1 className="text-xl text-white font-bold">
        <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
        <span>Movie App</span>
      </h1>
      <nav className="flex flex-col gap-3 text-zinc-400 text-xl">
        <h1 className="text-white font-semibold text-2xl mt-10 mb-5">
          New Feeds
        </h1>
        <Link
          to="/trending"
          className="hover:bg-[#6556CD] hover:text-white duration-500 rounded-lg p-3"
        >
          <i className="ri-fire-fill mr-2"></i>
          Trending
        </Link>
        <Link
          to="/popular"
          className="hover:bg-[#6556CD] hover:text-white duration-500 rounded-lg p-3"
        >
          <i className="ri-bard-fill mr-2"></i>
          Popular
        </Link>
        <Link
          to="/movie"
          className="hover:bg-[#6556CD] hover:text-white duration-500 rounded-lg p-3"
        >
          <i className="ri-movie-2-fill mr-2"></i>
          Movies
        </Link>
        <Link
          to="/tv"
          className="hover:bg-[#6556CD] hover:text-white duration-500 rounded-lg p-3"
        >
          <i className="ri-tv-2-fill mr-2"></i>
          Tv Shows
        </Link>
        <Link
          to="/people"
          className="hover:bg-[#6556CD] hover:text-white duration-500 rounded-lg p-3"
        >
          <i className="ri-team-fill mr-2"></i>
          People
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400 mt-3" />
      <nav className="flex flex-col gap-3 text-zinc-400 text-xl">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          website Information
        </h1>
        <Link
          to="/about"
          className="hover:bg-[#6556CD] hover:text-white duration-500 rounded-lg p-3"
        >
          <i className="ri-information-fill mr-2"></i>
          About
        </Link>
        <Link
          to="/contact"
          className="hover:bg-[#6556CD] hover:text-white duration-500 rounded-lg p-3"
        >
          <i className="ri-phone-fill mr-2"></i>
          Contact
        </Link>
      </nav>
    </div>
  );
}
