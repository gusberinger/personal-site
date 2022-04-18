import React, { useEffect, useState } from "react";

const Movie = ({ tconst }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData(tconst);
  }, [tconst]);

  async function getData(tconst) {
    let url = `https://www.omdbapi.com/?apikey=${process.env.GATSBY_OMDB_API}&i=${tconst}`;
    const response = await fetch(url);
    const data = await response.json();
    const { Title, Year } = data;
    setData({ title: Title, year: Year });
  }

  return (
    <>
      {data != null && (
        <a href={"https://www.imdb.com/title/" + tconst}>
          {data.title} ({data.year})
        </a>
      )}
    </>
  );
};

export default Movie;
