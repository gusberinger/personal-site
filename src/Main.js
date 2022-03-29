import React from 'react'
import seedrandom from 'seedrandom'
import './Main.css'
import waters from './images/waters.jpeg'

const movies = [
  "The Tragedy of Macbeth",
  "Uncut Gems",
  "Eraserhead",
  "The Killing of a Sacred Deer",
  "The Lighthouse",
  "The Handmaiden",
  "Snowpiercer",
  "In Bruges",
  "Silence",
  "Whiplash",
  "Moonrise Kingdom",
  "Dunkirk",
  "The Raid",
  "Rabbits"
]

const selectMovie = () => {
  let now = new Date()
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  let rng = seedrandom(today)
  let n = Math.floor(rng() * movies.length)
  return movies[n]
}


const Main = () => {
  return (
    <div className="content">
      <div className='col'>
      <p>
        I'm a mathematics student at the University of Minnesota Twin Cities, also completing minors in computer science and political science. Right now I'm researching the Wikipedia hyperlink graph. My favorite tools are Python, Haskell, and the Tidyverse.
      </p>
      <p>
        Today my favorite movie is {selectMovie()}.
      </p>
      </div>
      <div class="col">
        <img className="img-content" src={waters} alt=""/>
      </div>

    </div>
  )
}

export default Main