import React, { useEffect, useState } from "react";
import MovieCard from "../../Components/MovieCard/MovieCard";
import { TRENDING } from "../../Configs/api";
import { MovieInfo } from "../../Configs/interface";
import HttpService from "../../Services/http";


const Trending = () => {
  const [trending, setTrending] = useState<Array<MovieInfo>>(null);
  console.log(trending);
  useEffect(() => {
    (async function () {
      const result = await HttpService.get(TRENDING);
      result && setTrending(result.results);
    })();
  }, []);
  const renderTrendingMovies = () => {
    return trending.map((movieInfo: MovieInfo, index: number) => {
      return (
        <React.Fragment key={movieInfo.id.toString()}>
          <MovieCard movieInfo={movieInfo} />
        </React.Fragment>
      );
    });
  };
  return (
    <div >
      <div className={'page-title'}>Trending today</div>
      {trending ? <div className='movies-container'>
        
        {renderTrendingMovies()}</div> : <div>Loading...</div>}
    </div>
  );
};

export default Trending;
