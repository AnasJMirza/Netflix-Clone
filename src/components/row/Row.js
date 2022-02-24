
import axios from '../../API/axios';
import React, { useEffect, useState } from 'react';
import './Row.css'

const Row = (props) => {

    const [movie, setMovie] = useState([]);

    const baseURL = "https://image.tmdb.org/t/p/w500/"

    useEffect(()=>{
        async function  fetchData(){
            const request = await axios.get(props.fetchURL);
            setMovie(request.data.results)
            return request;
        };

        fetchData();

        console.log(movie)

    }, [props.fetchURL])
    return (
        <div className='row'>
            <h2>{props.title}</h2>

            <div className='posterWrapper'>
                {movie.map(movie =>(
                    <img 
                    src={`${baseURL}${props.isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={`${movie.name}`}
                    className={`poster ${props.isLargeRow && 'largePoster'}`}
                    key={movie.key}
                    />
                ))}
            </div>
        </div>
    );
};

export default Row;