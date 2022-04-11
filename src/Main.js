import React from "react";
import seedrandom from "seedrandom";
import "./Main.css";
import waters from "./images/waters.jpeg";
import Movie from "./Movie";
import movieList from "./MovieList.js";

const selectMovie = () => {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let rng = seedrandom(today);
  let n = Math.floor(rng() * movieList.length);
  return movieList[n];
};

const Main = () => {
  return (
    <section>
      <div className="row">
        <div className="col">
          <p>
            I'm a mathematics student at the University of Minnesota Twin
            Cities, also completing minors in computer science and political
            science. Right now I'm researching the Wikipedia hyperlink graph. My
            favorite tools are Python, Haskell, and the Tidyverse.
          </p>
          <p>
            Today my favorite movie is <Movie id={selectMovie()}></Movie>.
          </p>
        </div>
        <div className="col">
          <img className="img-content" src={waters} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Main;
