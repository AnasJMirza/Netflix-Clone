import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import HomeBanner from '../../components/homeBanner/HomeBanner';
import requests from '../../API/requests';
import Row from '../../components/row/Row';
import './Home.css'

const Home = () => {
    return (
        <div className='homeBackground'>
            <Navbar/>

            <HomeBanner/>

            <Row
            title = "NETFLIX ORIGNALS"
            fetchURL = {requests.fetchNetflixOrignals}
            isLargeRow
            />
            <Row
            title = "TOP RATED"
            fetchURL = {requests.fetchTopRated}
            
            />
            <Row
            title = "ACTION MOVIES"
            fetchURL = {requests.fetchActionMovies}
            
            />
            <Row
            title = "COMEDY MOVIES"
            fetchURL = {requests.fetchComedyMovies}
            
            />
            <Row
            title = "HORROR MOVIES"
            fetchURL = {requests.fetchHorrorMovies}
            
            />
            <Row
            title = "ROMANCE MOVIES"
            fetchURL = {requests.fetchRomanceMovies}
            />
            <Row
            title = "DOCUMENTRIES"
            fetchURL = {requests.fetchDucomentiriesMovies}
            />
        </div>
    );
};

export default Home;