import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function About() {
    const navigate = useNavigate();
  return (
    <div className="w-screen h-screen px-[10%] py-10 overflow-y-auto">
      <div className="max-w-screen-md">
        <Link>
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] text-3xl text-zinc-500 font-bold ri-arrow-left-line"
          ></i>
        </Link>
        <h1 className="text-4xl font-bold mb-5 text-zinc-500">About</h1>
        <p className="text-zinc-400">
          Welcome to our Movie App, your ultimate destination for exploring the
          world of movies! Our mission is to make it easier for movie
          enthusiasts to discover, track, and enjoy films across genres, eras,
          and industries. Whether you’re looking for the latest blockbuster, a
          timeless classic, or an obscure indie gem, we’ve got you covered.
        </p>
        <h1 className="text-4xl font-bold my-5 text-zinc-500">What We Offer</h1>
        <p className="text-zinc-400 list-disc ">
          <li>
            <span className="text-lg font-semibold">
              Comprehensiv Database:{" "}
            </span>
            <span>
              Dive into a vast collection of movies with detailed information
              about cast, crew, plot summaries, and release dates.
            </span>
          </li>
        </p>
        <p className="text-zinc-400 list-disc mt-2">
          <li>
            <span className="text-lg font-semibold">
              Trending & Popular Picks:{" "}
            </span>
            <span>
              Stay updated with trending movies and fan-favorite selections.
            </span>
          </li>
        </p>
        <p className="text-zinc-400 list-disc mt-2">
          <li>
            <span className="text-lg font-semibold">Search & Filter: </span>
            <span>
              Easily find movies based on genre, year, or your favorite actors
              and directors.
            </span>
          </li>
        </p>
        <p className="text-zinc-400 list-disc mt-2">
          <li>
            <span className="text-lg font-semibold">
              Personalized Experience:{" "}
            </span>
            <span>
              Create your own watchlist and never miss the movies you love.
            </span>
          </li>
        </p>
        <h1 className="text-4xl font-bold my-5 text-zinc-500">
          Why We Built This
        </h1>
        <p className="text-zinc-400">
          As avid movie lovers ourselves, we wanted to create a platform that
          not only showcases movies but also helps fans connect with the art of
          cinema. This app is a labor of passion, crafted to enhance the way you
          experience and explore films.
        </p>
        <h1 className="text-4xl font-bold my-5 text-zinc-500">Get In Touch</h1>
        <p className="text-zinc-400">
          Have feedback or suggestions? We’d love to hear from you! Contact us
          at <a href="#">example@gmail.com</a>. Thank you for visiting Movie
          App. Let’s make every movie moment unforgettable!
        </p>
      </div>
    </div>
  );
}
