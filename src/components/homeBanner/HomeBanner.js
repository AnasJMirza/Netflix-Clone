import axios from 'axios';
import React, {useState, useEffect} from 'react';
import requests from '../../API/requests';
import './HomeBanner.css'

const HomeBanner = () => {

    const [movie, setMovie] = useState([]);

    useEffect( ()=> {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOrignals);

            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );

            return request;
        }

        fetchData();
    }, []);

    console.log(movie)


    const truncate = (string, n) => {
        return string?.length > n? string.substr(0, n-1) + '...' : string;
    }
    return (
        <div className='banner' style={{
            backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition : "center center",
            backgroundSize : "cover",
        }}>
            
            <div className='bannerContent'>
                <h1>{movie?.title || movie?.name || movie?.orignal_name}</h1>

                <div className='bannerButtons'>
                    <button className='bannerButton'>Play</button>
                    <button className='bannerButton'>My List</button>
                </div>

                <div className='bannerDescription'>{truncate(movie?.overview, 150)}</div>
            </div>

            <div className='bannerBottomFade' />
        </div>
    );
};

export default HomeBanner;