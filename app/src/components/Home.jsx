import React, { useEffect, useState } from "react";
import SideNav from "./partial/SideNav";
import TopNav from "./partial/TopNav";
import axios from "../utils/axios";
import Header from "./partial/Header";
import TrendingCards from "./partial/TrendingCards";
import Dropdown from "./partial/Dropdown";
import Loading from "./Loading";

export default function Home() {
  document.title = "Movie App | Home";
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all");

  console.log(wallpaper)

  const getWallpaper = async () => {
    try {
      const { data } = await axios.get("/trending/all/day");
      const randomWallpaper =
        data.results[Math.floor(Math.random() * data.results.length)];
      setwallpaper(randomWallpaper);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      settrending(data.results);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  useEffect(() => {
    !wallpaper && getWallpaper();
    getTrending();
  }, [category]);
  return wallpaper && trending ? (
    <>
      <SideNav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <TopNav />
        <Header data={wallpaper} />
        <div className="p-5 flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-zinc-400">Trending</h1>
          <Dropdown
            title="filter"
            options={["tv", "movie", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>
        <TrendingCards data={trending} />
      </div>
    </>
  ) : (
    // <h1 className="mx-auto text-white text-5xl mt-[59%]">Loading...</h1>
    <Loading />
  );
}
