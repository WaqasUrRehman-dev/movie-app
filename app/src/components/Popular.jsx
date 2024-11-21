import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Cards from "./partial/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import Dropdown from "./partial/Dropdown";
import TopNav from "./partial/TopNav";

export default function Popular() {
    document.title = "Movie App | Popular ";
  const navigate = useNavigate();
  const [category, setcategory] = useState("movie");
  const [popular, setpopular] = useState([]);
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);

  const getPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);
      // setpopular(data.results);
      if (data.results.length > 0) {
        setpopular((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        sethasmore(false);
      }
    } catch (error) {
      console.log("Error :", error);
    }
  };

  const refreshHandler = () => {
    if (popular.length === 0) {
      getPopular();
    } else {
      setpopular([]);
      setpage(1);
      getPopular();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return popular.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full flex items-center justify-between px-[5%]">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>{" "}
          Popular
        </h1>
        <TopNav />
          <Dropdown
            title="category"
            options={["tv", "movie"]}
            func={(e) => setcategory(e.target.value)}
          />
      </div>
      <InfiniteScroll
        loader={<h1>Loading...</h1>}
        dataLength={popular.length}
        hasMore={hasmore}
        next={getPopular}
      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}
