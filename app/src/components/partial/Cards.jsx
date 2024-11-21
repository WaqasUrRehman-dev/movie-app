import React from "react";
import { Link } from "react-router-dom";
import noImage from "/noImage.jpg";

export default function Cards({ data, title }) {
  console.log(title);
  return (
    <div className="flex flex-wrap w-full h-full px-[5%] bg-[#1F1E24]">
      {data.map((card, i) => (
        <Link
          to={`/${card.media_type || title}/details/${card.id}`}
          key={i}
          className="relative mb-[3%] mr-[4%] w-[25vh]"
        >
          <img
            className="w-full h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] rounded"
            src={
              card.backdrop_path || card.poster_path || card.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    card.backdrop_path || card.poster_path || card.profile_path
                  }`
                : noImage
            }
            alt=""
          />
          <h1 className="text-zinc-300 font-semibold text-xl mt-3">
            {card.name ||
              card.original_name ||
              card.title ||
              card.original_title}
          </h1>
          {card.vote_average && (
            <div className="absolute right-[-10%] bottom-[30%] text-lg font-semibold text-white bg-yellow-600 w-[6vh] h-[6vh] flex justify-center items-center rounded-full ">
              {(card.vote_average * 10).toFixed(0)} <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}
