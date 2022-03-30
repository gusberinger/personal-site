import React, { useEffect, useState } from 'react'


const Movie = ({id}) => {
  const [data, setData] = useState({title:"The Godfather", year: "1920"})
  
  useEffect(() => {
    getData(id)
  }, [id])

  async function getData(id) {
    let url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API}&i=${id}`
    const response = await fetch(url)
    const data = await response.json()
    const { Title, Year } = data
    setData({ title: Title, year: Year })
  }

  return (
    <>
      <a href={"https://www.imdb.com/title/"+id}>{data.title} ({data.year})</a>
    </>
  )
}

export default Movie