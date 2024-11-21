import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "../NotFound";

export default function Trailer() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytVideo = useSelector((state) => state[category].info.videos);
  return (
    <div className="absolute top-0 left-0 z-[100] bg-[rgba(0,0,0,.9)] w-screen h-screen flex items-center justify-center">
      <Link>
        <i
          onClick={() => navigate(-1)}
          className="hover:text-yellow-400 ri-close-fill absolute top-5 right-[5%] text-3xl text-white"
        ></i>
      </Link>
      {ytVideo ? (
        <ReactPlayer
          height={620}
          width={1280}
          url={`https://www.youtube.com/watch?v=${ytVideo.key}`}
          controls="true"
        />
      ) : (
        <NotFound />
      )}
    </div>
  );
}
