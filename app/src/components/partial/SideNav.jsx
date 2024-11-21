import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SideNav() {
  const [toggle, settoggle] = useState(false);
  const upperData = [
    {
      title: "Trending",
      icon: "ri-fire-fill",
      path: "/trending",
    },
    {
      title: "Popular",
      icon: "ri-bard-fill",
      path: "/popular",
    },
    {
      title: "Movie",
      icon: "ri-movie-2-fill",
      path: "/movie",
    },
    {
      title: "Tv Show",
      icon: "ri-tv-2-fill",
      path: "/tv",
    },
    {
      title: "People",
      icon: "ri-team-fill",
      path: "/people",
    },
  ];

  const lowerData = [
    {
      title: "About Us",
      icon: "ri-information-fill",
      path: "/about",
    },
    {
      title: "Contact Us",
      icon: "ri-phone-fill",
      path: "/contact",
    },
  ];
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-300 p-8">
      <h1 className="text-2xl font-bold text-white">
        <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
        <span>Movie App</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-lg gap-2">
        <h1 className="text-white font-semibold text-xl mt-8 mb-3">
          New Feeds
        </h1>
        {upperData.map((i, id) => (
          <Link
            key={id}
            to={i.path}
            className="hover:bg-[#6556CD] hover:text-white duration-500 rounded-lg xl:p-2 2xl:p-3"
          >
            <i className={`${i.icon} mr-2`}></i>
            {i.title}
          </Link>
        ))}

        <hr className="border-none h-[1px] bg-zinc-200 mt-4" />
        <h1 className="text-white font-semibold text-xl 2xl:mt-8 xl:mt-6 mb-3">
          Website Information
        </h1>
        {lowerData.map((t, id) => (
          <Link
            to={t.path}
            key={id}
            className="hover:bg-[#6556CD] hover:text-white duration-500 rounded-lg xl:p-2 2xl:p-3"
          >
            <i className={`${t.icon} mr-2`}></i>
            {t.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
