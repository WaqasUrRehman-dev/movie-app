import React from "react";
import { Link } from "react-router-dom";
import noImage from "/noImage.jpg";

export default function TrendingCards({ data }) {
  return (
    <div className="w-full h-[50vh] flex gap-2 overflow-y-hidden p-5 mb-5">
      {data.length > 0 ? (
        data.map((d, i) => (
          <Link
            to={`/${d.media_type}/details/${d.id}`}
            key={i}
            className="min-w-[20%] h-[40vh] bg-zinc-900 rounded-lg overflow-hidden"
          >
            <img
              className="h-[40%] object-cover w-full"
              src={
                d.backdrop_path ||
                d.poster_path ||
                d.profile_path ? `https://image.tmdb.org/t/p/original/${
                  d.backdrop_path || d.poster_path || d.profile_path
                }`: noImage
              }
              alt=""
            />
            <div className="text-white h-[50%] pt-2 px-3 overflow-y-auto">
              <h1 className="text-lg font-bold">
                {d.name || d.original_name || d.title || d.original_title}
              </h1>
              <p className="mt-2 text-sm tracking-tight">
                {d.overview.slice(0, 100)}...{" "}
                <span className="text-zinc-500">more</span>
              </p>
            </div>
          </Link>
        ))
      ) : (
        <h1 className="text-3xl text-white font-black text-center mt-5">
          Nothing to Show
        </h1>
      )}
    </div>
  );
}
