import React from "react";
import { Link } from "react-router-dom";

export default function SideNav() {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-300 p-8">
      <h1 className="text-2xl font-bold text-white">
        <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
        <span>Movie App</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-lg gap-2">
        <h1 className="text-white font-semibold text-xl mt-8 mb-3">
          New Feeds
        </h1>
        <Link
          to="/trending"
          className="hover:bg-[#6556CD] hover:text-white duration-500 rounded-lg xl:p-2 2xl:p-3"
        >
          <i className="mr-2 ri-fire-fill"></i>
          Trending
        </Link>
        <Link
          to="/popular"
          className="hover:bg-[#6556CD] hover:text-white duration-500 rounded-lg xl:p-2 2xl:p-3"
        >
          <i className="mr-2 ri-bard-fill"></i>
          Popular
        </Link>
        <Link
          to="/movie"
          className="hover:bg-[#6556CD] hover:text-white duration-500 rounded-lg xl:p-2 2xl:p-3"
        >
          <i className="mr-2 ri-movie-2-fill"></i>
          Movies
        </Link>
        <Link
          to="/tv"
          className="hover:bg-[#6556CD] hover:text-white duration-500 rounded-lg xl:p-2 2xl:p-3"
        >
          <i className="mr-2 ri-tv-2-fill"></i>
          TV shows
        </Link>
        <Link
          to="/people"
          className="hover:bg-[#6556CD] hover:text-white duration-500 rounded-lg xl:p-2 2xl:p-3"
        >
          <i className="mr-2 ri-team-fill"></i>
          People
        </Link>

      <hr className="border-none h-[1px] bg-zinc-200 mt-4" />
        <h1 className="text-white font-semibold text-xl 2xl:mt-8 xl:mt-6 mb-3">
          Website Information
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-500 rounded-lg xl:p-2 2xl:p-3">
          <i className="mr-2 ri-information-fill"></i>
          About Us
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-500 rounded-lg xl:p-2 2xl:p-3">
          <i className="mr-2 ri-phone-fill"></i>
          Contact Us
        </Link>
      </nav>
    </div>
  );
}
