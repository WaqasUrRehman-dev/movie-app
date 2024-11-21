import React from "react";
import { Link } from "react-router-dom";

export default function Header({ data }) {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.poster_path || data.profile_path
        })`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[60vh] flex flex-col justify-end items-start p-10 text-white"
    >
      <h1 className="text-4xl font-bold w-2/3">
        {data.name || data.original_name || data.title || data.original_title}
      </h1>
      <p className="w-1/2 my-3 text-sm">
        {data.overview.slice(0, 200)}...{" "}
        <Link
          to={`/${data.media_type}/details/${data.id}`}
          className="text-blue-400"
        >
          more
        </Link>
      </p>
      <p>
        <i className="text-yellow-500 ri-megaphone-fill mr-1"></i>
        {data.release_date || "no information"}
        <i className="text-yellow-500 ri-album-fill mr-1 ml-3"></i>
        {data.media_type}
      </p>
      <Link
        to={`/${data.media_type}/details/${data.id}/trailer`}
        className="p-3 bg-[#6556CD] mt-6 rounded-xl"
      >
        Watch Trailor
      </Link>
    </div>
  );
}
