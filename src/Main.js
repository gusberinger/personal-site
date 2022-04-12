import React from "react";
import seedrandom from "seedrandom";
import "./Main.css";
import waters from "./images/waters.jpeg";
import Movie from "./Movie";
import movieList from "./MovieList.js";
import Footer from "./Footer";
import Navbar from "./Navbar";

const selectMovie = () => {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let rng = seedrandom(today);
  let n = Math.floor(rng() * movieList.length);
  return movieList[n];
};

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <section>
        <div className="container">
          <div className="row hero">
            <div className="col">
              <h2>About Me</h2>
              <p>
                I'm a mathematics student at the University of Minnesota Twin
                Cities, also completing minors in computer science and political
                science. Right now I'm researching the Wikipedia hyperlink
                graph. My favorite tools are Python, Haskell, and the Tidyverse.
              </p>
              <p>
                Today my favorite movie is <Movie tconst={selectMovie()}></Movie>.
              </p>
            </div>
            <div className="col">
              <img className="img-content" src={waters} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Projects</h2>
          <div className="row">
            <div className="col">
              <div className="item">
                <h3>WikiNetworks</h3>
                <p>
                  Network analysis of Wikipedia's hyperlink structure. The graph is created by parsing Wikipedia data dumps into a sparse matrix. Using scipy csr matrices, implemented centrality, and other graph measures. <a href="https://github.com/gusberinger/WikiNetworks">Link</a>
                </p>
              </div>
              <div className="item">
                <h3>Smiter</h3>
                <p>
                  React App that uses form data to automatically roll damage for
                  Palladins in the board game D&D. <a href="https://smiter.gusberinger.com/">Link</a>
                </p>
              </div>
            </div>
            <div className="col">
              <div className="item">
                <h3>Letterboxd-Convert</h3>
                <p>
                  Python package that converts list of movies on Letterboxd.com,
                  to list of IMDb ids. The lists are downloaded asynchronous and
                  cached in a local database. <a href="https://github.com/letterboxd-convert">Link</a>
                </p>
              </div>
              <div className="item">
                <h3>SafeU Map</h3>
                <p>
                  Map of all SafeU crime notifications. Each notification
                  geocoded using Google Maps API. Map created with leaflet
                  package in R. <a href="https://safeu.gusberinger.com">Link</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Main;
