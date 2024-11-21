import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./partial/TopNav";
import axios from "../utils/axios";
import Loading from "./Loading";
import Cards from "./partial/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

export default function People() {
    document.title = "Movie App | People ";
    const navigate = useNavigate();
    // const [category, setcategory] = useState("airing_today");
    const [person, setPerson] = useState([]);
    const [page, setpage] = useState(1);
    const [hasmore, sethasmore] = useState(true);

    const getPerson = async () => {
      try {
        const { data } = await axios.get(`/person/popular?page=${page}`);
        // setpopular(data.results);
        if (data.results.length > 0) {
          setPerson((prev) => [...prev, ...data.results]);
          setpage(page + 1);
        } else {
          sethasmore(false);
        }
      } catch (error) {
        console.log("Error :", error);
      }
    };

    const refreshHandler = () => {
      if (person.length === 0) {
        getPerson();
      } else {
        setPerson([]);
        setpage(1);
        getPerson();
      }
    };

    useEffect(() => {
      refreshHandler();
    }, []);
  return person.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full flex items-center justify-evenly px-[5%]">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>{" "}
          People
        </h1>
        <TopNav />
      </div>
      <InfiniteScroll
        loader={<h1>Loading...</h1>}
        dataLength={person.length}
        hasMore={hasmore}
        next={getPerson}
      >
        <Cards data={person} title="people"/>
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}
