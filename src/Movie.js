import React from 'react'
require("dotenv").config()
const imdbLink = (id) => "https://www.imdb.com/title/" + id

const Movie = ({title, year, id}) => {
  console.log(process.env)
  return (
    <>
      <a href={imdbLink(id)}>{title} ({year})</a>
    </>
  )
}

export default Movie