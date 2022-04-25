import React from 'react'
import { IMGW300 } from '../../Configs/constants'
import { MovieInfo } from '../../Configs/interface';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from "@mui/icons-material/Tv";
import VisibilityIcon from '@mui/icons-material/Visibility';

import './moviecard.styles.scss';

type Props ={
    movieInfo: MovieInfo
}

const MovieCard = ({movieInfo}:Props) => {
    console.log(movieInfo)
    return (
        <div className={'movie-card'}>
          <img src={`${IMGW300}${movieInfo.poster_path}`}  alt={movieInfo.original_title}/> 
            <div className={'movie-title'}>{movieInfo.original_name || movieInfo.original_title}</div>
            <div className={'movie-info'}>
                {movieInfo.media_type === 'tv' ? <div><TvIcon fontSize='small' /><span>{movieInfo.media_type}</span></div> : <div><MovieIcon />{movieInfo.media_type}</div>}
                <div><VisibilityIcon />{movieInfo.release_date || movieInfo.first_air_date}</div>
            </div>
        </div>
    )
}

export default MovieCard
