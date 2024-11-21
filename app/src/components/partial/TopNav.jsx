import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noImage from "/noImage.jpg"

export default function TopNav() {
  const [query, setquery] = useState("");

  const [searches, setsearches] = useState([]);

  const getSearch = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  useEffect(() => {
    getSearch();
  }, [query]);

  return (
    <div className="w-[50%] h-[10vh] flex items-center mx-auto relative">
      <i className="text-3xl text-zinc-400 ri-search-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[70%] text-zinc-200 mx-10 p-5 outline-none border-none text-xl bg-transparent"
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="text-3xl text-zinc-400 cursor-pointer ri-close-fill"
        ></i>
      )}

      <div className="w-[70%] max-h-[60vh] z-10 absolute bg-zinc-200 top-[100%] left-[10%] overflow-auto rounded">
        {searches.map((search, id) => (
          <Link
          to={`/${search.media_type || "movie"}/details/${search.id}`}
            key={id}
            className="w-full flex justify-start items-center text-zinc-600 font-semibold hover:text-black hover:bg-zinc-300 duration-300 border-b-2 border-zinc-100 p-10"
          >
            <img
              className="w-[20vh] h-[20vh] object-cover mr-5 rounded shadow-lg"
              src={
                search.backdrop_path ||
                search.poster_path ||
                search.profile_path ? `https://image.tmdb.org/t/p/original/${
                  search.backdrop_path ||
                  search.poster_path ||
                  search.profile_path
                }` : noImage
              }
              alt=""
            />
            <span>
              {search.name ||
                search.original_name ||
                search.title ||
                search.original_title}
            </span>
          </Link>
        ))}
        {/*  */}
      </div>
    </div>
  );
}
