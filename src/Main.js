import React from "react";
import seedrandom from "seedrandom";
import "./Main.css";
import waters from "./images/waters.jpeg";
import Movie from "./Movie";
import movieList from "./MovieList.js";
import Footer from "./Footer"
import Navbar from "./Navbar"

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
      </div>
    </section>
    <section>
      <div className="container">
        <h1>Projects</h1>
        <div class="row">
          <div class="col">
            <div class="item">
              <h3>WikiNetworks</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo rem sint excepturi tempore modi ducimus in maiores eligendi facere cupiditate!</p>
            </div>
            <div class="item">
              <h3>Smiter</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis repudiandae architecto fuga molestiae, necessitatibus accusamus omnis corrupti dolores voluptatem dolorem!</p>
            </div>
          </div>
          <div class="col">
            <div class="item">
              <h3>Letterboxd-Convert</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consequatur voluptates corrupti commodi dolor iusto. Possimus sit perspiciatis animi consequuntur!</p>
            </div>
            <div class="item">
              <h3>SafeU Map</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt omnis, dignissimos minus nostrum alias possimus iusto necessitatibus id aliquam aliquid?</p>
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
