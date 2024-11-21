import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./partial/TopNav";
import Dropdown from "./partial/Dropdown";
import axios from "../utils/axios";
import Loading from "./Loading";
import Cards from "./partial/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Trending() {
  document.title = "Movie App | Trending ";
  const navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [durataion, setdurataion] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);
  const getTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${durataion}?page=${page}`
      );
      // settrending(data.results);
      if (data.results.length > 0) {
        settrending((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        sethasmore(false);
      }
    } catch (error) {
      console.log("Error :", error);
    }
  };

  const refreshHandler = () => {
    if (trending.length === 0) {
      getTrending();
    } else {
      settrending([]);
      setpage(1);
      getTrending();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category, durataion]);

  return trending.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full flex items-center justify-between px-[5%]">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>{" "}
          Trending
        </h1>
        <TopNav />
        <div className="flex gap-2">
          <Dropdown
            title="category"
            options={["movie", "tv", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
          <Dropdown
            title="duration"
            options={["week", "day"]}
            func={(e) => setdurataion(e.target.value)}
          />
        </div>
      </div>
      <InfiniteScroll
        loader={<h1>Loading...</h1>}
        dataLength={trending.length}
        hasMore={hasmore}
        next={getTrending}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}
