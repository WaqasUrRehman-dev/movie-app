import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails, removeTv } from "../store/actions/tvAction";
import noImage from "/noImage.jpg";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import TrendingCards from "./partial/TrendingCards";
import Loading from "./Loading";
export default function TvDetails() {
  document.title = "Movie App | Tv Details";
  const { info } = useSelector((state) => state.tv);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(fetchDetails(id));
    return () => {
      dispatch(removeTv());
    };
  }, [id]);
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${
          info.detail.backdrop_path ||
          info.detail.poster_path ||
          info.detail.profile_path
        })`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen h-[190vh] px-[10%] relative bg-[#1F1E24]"
    >
      {/* part 1 navigation */}
      <nav className="w-full h-[10vh] flex gap-10 items-center text-zinc-100 text-2xl">
        <Link>
          <i
            onClick={() => navigate(-1)}
            className="hover:text-yellow-400 ri-arrow-left-line"
          ></i>
        </Link>
        <a target="_blank" href={info.detail.homepage}>
          <i class="ri-external-link-line"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
        >
          <i class="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalId.imdb_id}`}
        >
          <i class="ri-links-fill"></i>
        </a>
      </nav>

      {/* part 2 poster and details */}

      <div className="w-full flex">
        <img
          className="w-[25%] h-[50vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]"
          src={
            info.detail.backdrop_path ||
            info.detail.poster_path ||
            info.detail.profile_path ? `https://image.tmdb.org/t/p/original/${
              info.detail.backdrop_path ||
              info.detail.poster_path ||
              info.detail.profile_path
            }`: noImage
          }
          alt=""
        />
        <div className="ml-[5%] text-white">
          <h1 className="text-5xl font-black">
            {info.detail.name ||
              info.detail.original_name ||
              info.detail.title ||
              info.detail.original_title}
            <span className="text-xl text-zinc-300 font-semibold">
              ({info.detail.first_air_date.split("-")[0]})
            </span>
          </h1>
          <div className="flex items-center gap-x-4 mt-3 text-lg">
            <span className="text-lg font-semibold text-white bg-yellow-600 w-[6vh] h-[6vh] flex justify-center items-center rounded-full ">
              {(info.detail.vote_average * 10).toFixed(0)} <sup>%</sup>
            </span>
            <h1 className="w-[20px] leading-5 font-semibold">User Score</h1>

            <h1 className="ml-8">{info.detail.first_air_date}</h1>
            <h1>{info.detail.runtime} min</h1>
            <h1>{info.detail.genres.map((g, i) => g.name).join(", ")}</h1>
          </div>

          <h1 className="text-xl font-semibold italic text-zinc-200 mt-3">
            {info.detail.tagline}
          </h1>

          <h1 className="text-xl font-semibold mt-3 mb-2">Overview</h1>
          <p className="text-sm">{info.detail.overview}</p>

          <h1 className="text-xl font-semibold mt-3 mb-2">Movie Translated</h1>
          <p className="text-sm mb-4">{info.translations.join(", ")}</p>

          <Link
            to={`${pathname}/trailer`}
            className="py-3 px-5 rounded-lg bg-[#6556CD] "
          >
            <i class="text-xl mr-2 ri-play-fill"></i>
            Play Trailer
          </Link>
        </div>
      </div>

      {/* part 3 Available on Platform */}
      <div className="w-[80%] flex flex-col gap-y-5 mt-10">
        {info.watchProvider && info.watchProvider.flatrate && (
          <div className="flex gap-10 items-center text-white">
            <h1>Available on Platforms</h1>
            {info.watchProvider.flatrate.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchProvider && info.watchProvider.buy && (
          <div className="flex gap-10 items-center text-white">
            <h1>Available to Buy</h1>
            {info.watchProvider.buy.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchProvider && info.watchProvider.rent && (
          <div className="flex gap-10 items-center text-white">
            <h1>Available on Rent</h1>
            {info.watchProvider.rent.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>

      {/* part 4 seasons */}
      <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
      <h1 className="text-2xl font-bold text-white">Seasons</h1>
      <div className="flex mt-4 ml-5 overflow-x-auto h-[20%]">
        {info.detail.seasons.map((s, i) => (
          <div key={i} className="mr-5 min-w-[15%] h-28 mb-3">
            <img
              className="w-full h-[25vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] rounded-lg"
              src={`https://image.tmdb.org/t/p/original/${s.poster_path}`}
              alt=""
            />
            <h1 className="text-lg font-semibold text-white mt-3">{s.name}</h1>
          </div>
        ))}
      </div>

      {/* part 5 Recommendations and similarities */}
      <hr className="mt-8 mb-5 border-none h-[2px] bg-zinc-500" />
      <h1 className="text-2xl font-bold text-white">
        Recommendations & Similar Stuff
      </h1>
      <TrendingCards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
}
