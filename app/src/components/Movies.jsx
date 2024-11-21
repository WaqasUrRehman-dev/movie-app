import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./partial/TopNav";
import Dropdown from "./partial/Dropdown";
import axios from "../utils/axios";
import Loading from "./Loading";
import Cards from "./partial/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Movies() {
  document.title = "Movie App | Movies ";
  const navigate = useNavigate();
  const [category, setcategory] = useState("now_playing");
  const [movies, setmovies] = useState([]);
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);

  const getMovies = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      if (data.results.length > 0) {
        setmovies((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        sethasmore(false);
      }
    } catch (error) {
      console.log("Error :", error);
    }
  };

  const refreshHandler = () => {
    if (movies.length === 0) {
      getMovies();
    } else {
      setmovies([]);
      setpage(1);
      getMovies();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);
  return movies.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full flex items-center justify-between px-[5%]">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>{" "}
          Movies <span className="text-sm text-zinc-600">({category})</span>
        </h1>
        <TopNav />
        <Dropdown
          title="category"
          options={["popular", "top_rated", "upcoming", "now_playing"]}
          func={(e) => setcategory(e.target.value)}
        />
      </div>
      <InfiniteScroll
        loader={<h1>Loading...</h1>}
        dataLength={movies.length}
        hasMore={hasmore}
        next={getMovies}
      >
        <Cards data={movies} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}
