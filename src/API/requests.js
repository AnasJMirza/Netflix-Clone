

const API_KEY = "0dcffb4867e505fd70f2cebb6a2e3c78";

const requests = {
    
    fetchTrending : `https://api.themoviedb.org/3/trending/all/day?api_key=0dcffb4867e505fd70f2cebb6a2e3c78`,

    fetchNetflixOrignals : `https://api.themoviedb.org/3/discover/tv?api_key=0dcffb4867e505fd70f2cebb6a2e3c78&language=en-US&page=1&include_null_first_air_dates=false`,
    
    fetchTopRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=0dcffb4867e505fd70f2cebb6a2e3c78&language=en-US`,

    fetchActionMovies : `https://api.themoviedb.org/3/discover/movie?api_key=0dcffb4867e505fd70f2cebb6a2e3c78&with_genres=28`,

    fetchComedyMovies : `https://api.themoviedb.org/3/discover/movie?api_key=0dcffb4867e505fd70f2cebb6a2e3c78&with_genres=35`,
    
    fetchHorrorMovies : `https://api.themoviedb.org/3/discover/movie?api_key=0dcffb4867e505fd70f2cebb6a2e3c78&with_genres=37`,

    fetchRomanceMovies : `https://api.themoviedb.org/3/discover/movie?api_key=0dcffb4867e505fd70f2cebb6a2e3c78&with_genres=10749`,

    fetchDucomentiriesMovies : `https://api.themoviedb.org/3/discover/movie?api_key=0dcffb4867e505fd70f2cebb6a2e3c78&with_genres=99`,
    

    
}

export default requests;