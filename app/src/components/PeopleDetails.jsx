import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails, removePeople } from "../store/actions/peopleAction";
import { Link, useNavigate, useParams } from "react-router-dom";
import TrendingCards from "./partial/TrendingCards";
import Loading from "./Loading";
import Dropdown from "./partial/Dropdown";

export default function PeopleDetails() {
  document.title = "Movie App | People Details";
  const { info } = useSelector((state) => state.people);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [category, setCategory] = useState("movie");

  useEffect(() => {
    dispatch(fetchDetails(id));
    return () => {
      dispatch(removePeople());
    };
  }, [id]);

  return info ? (
    <div className="w-screen h-[180vh] bg-[#1F1E24] px-[10%]">
      {" "}
      {/* part 1 navigation */}
      <nav className="w-full h-[10vh] flex gap-10 items-center text-zinc-100 text-2xl">
        <Link>
          <i
            onClick={() => navigate(-1)}
            className="hover:text-yellow-400 ri-arrow-left-line"
          ></i>
        </Link>
      </nav>
      <div className="flex">
        {/* Part 2 Poster and Info */}

        <div className="w-[20%]">
          <img
            className="h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />
          <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500 w-[90%]" />
          <div className="text-white text-2xl flex gap-x-5 items-center">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
            >
              <i class="ri-earth-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalId.facebook_id}`}
            >
              <i class="ri-facebook-circle-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalId.instagram_id}`}
            >
              <i class="ri-instagram-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.twitter.com/${info.externalId.twitter_id}`}
            >
              <i class="ri-twitter-x-fill"></i>
            </a>
          </div>
          <h1 className="text-xl text-zinc-400 font-semibold my-5">
            Person Details
          </h1>
          <h1 className="text-lg text-zinc-400 font-semibold">Known For</h1>
          <h1 className="text-zinc-400 font-semibold">
            {info.detail.known_for_department}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Gender</h1>
          <h1 className="text-zinc-400 font-semibold">
            {info.detail.gender === 1 ? "Female" : "Male"}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">
            Birth Date
          </h1>
          <h1 className="text-zinc-400 font-semibold">
            {info.detail.birthday}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">
            Death Day
          </h1>
          <h1 className="text-zinc-400 font-semibold">
            {info.detail.deathday === null
              ? "Still Alive"
              : info.detail.deathday}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">
            Place of Birth
          </h1>
          <h1 className="text-zinc-400 font-semibold">
            {info.detail.place_of_birth}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">
            Also Known As
          </h1>
          <h1 className="text-zinc-400 font-semibold">
            {info.detail.also_known_as.join(", ")}
          </h1>
        </div>

        <div className="w-[80%] ml-5">
          <h1 className="text-4xl font-black text-zinc-400">
            {info.detail.name}
          </h1>
          <h1 className="text-xl font-semibold text-zinc-400 mt-5">
            Biography
          </h1>
          <p className="text-zinc-400 mt-3 text-sm">{info.detail.biography}</p>

          <h1 className="text-xl font-semibold text-zinc-400 mt-5">
            Acting Career
          </h1>
          <TrendingCards data={info.combinedCredits.cast} />

          <div className="flex justify-between items-center w-full text-zinc-400">
            <h1 className="text-xl font-semibold">Acting</h1>
            <Dropdown
              title="Category"
              options={["tv", "movie"]}
              func={(e) => setCategory(e.target.value)}
            />
            
          </div>
          <div className="w-full h-[50vh] mt-5 list-disc text-zinc-400 overflow-x-hidden overflow-y-auto shadow-lg shadow-[rgba(255,255,255,.3)] border-2 border-zinc-700 p-5">
            {info[category + "Credits"].cast.map((c, i) => (
              <li
                key={i}
                className="hover:text-white duration-300 cursor-pointer"
              >
                <Link to={`/${category}/details/${c.id}`}>
                  <span>
                    {c.name || c.title || c.original.name || c.original.title}
                  </span>
                  <span className="block ml-5">{c.character && `character name: ${c.character}`}</span>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}
