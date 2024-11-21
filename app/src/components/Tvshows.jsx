import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./partial/TopNav";
import Dropdown from "./partial/Dropdown";
import axios from "../utils/axios";
import Loading from "./Loading";
import Cards from "./partial/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Tvshows() {
  document.title = "Movie App | Tv Shows ";
  const navigate = useNavigate();
  const [category, setcategory] = useState("airing_today");
  const [tv, setTv] = useState([]);
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);

  const getTv = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);
      // setpopular(data.results);
      if (data.results.length > 0) {
        setTv((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        sethasmore(false);
      }
    } catch (error) {
      console.log("Error :", error);
    }
  };

  const refreshHandler = () => {
    if (tv.length === 0) {
      getTv();
    } else {
      setTv([]);
      setpage(1);
      getTv();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);
  return tv.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full flex items-center justify-between px-[5%]">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>{" "}
          TV <span className="text-sm text-zinc-600">({category})</span>
        </h1>
        <TopNav />
        <Dropdown
          title="category"
          options={["on_the_air", "popular", "top_rated", "airing_today"]}
          func={(e) => setcategory(e.target.value)}
        />
      </div>
      <InfiniteScroll
        loader={<h1>Loading...</h1>}
        dataLength={tv.length}
        hasMore={hasmore}
        next={getTv}
      >
        <Cards data={tv} title='tv' />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}
