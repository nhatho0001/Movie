import React , {useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import './InfoMovie.css'

function Movie(){
    const Basic_pathImg = "https://image.tmdb.org/t/p/original"
    const {id} = useParams()
    const [movie , setMovie] = useState({})
    const [Videos , setVideos] = useState([])
    function getData(){
        const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzRkNjc0NWVhMzhjYTA5Y2Y0N2QxMGVkZThjODJiMyIsIm5iZiI6MTcyNDMyMTAzNi45MzUzMDksInN1YiI6IjY2YmM3OGJhYjBmYWRhMzg1MGMzNTNhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NfVbZ8a6fhamArljRdG2flTRopj9sHzjxQhjGAmaeBA'
        }
        };

        fetch(url, options)
        .then(res => res.json())
        .then(json => setMovie(json))
        .catch(err => console.error('error:' + err));
    }
    async function handleVideo(id){
        const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzRkNjc0NWVhMzhjYTA5Y2Y0N2QxMGVkZThjODJiMyIsIm5iZiI6MTcyNDIxMzk5Ny45ODk3NzcsInN1YiI6IjY2YmM3OGJhYjBmYWRhMzg1MGMzNTNhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MIVRtlN1okjmxo5qXKx0wcjsXMLzkb-6P0Jkaz3WWP8'
        }
        };
  
        const res = await fetch(url, options)
        .then(res => res.json())
        .then(json => {console.log(json.results) ; setVideos(json.results)})
        .catch(err => console.error('error:' + err));
      }
    useEffect(() => {handleVideo(id)} , [id])
    useEffect(()=>{getData()} , [id])
    return <div className="Movie">
        <div className="ImgBg">
            <img src={Basic_pathImg + movie.backdrop_path} alt="backdrop img" />
            <div className="infoMovie">
              <h4 className="bungee-regular">{movie.title}</h4> 
              <p>{Number(movie.vote_average).toFixed(2)}⭐ ({movie.vote_count}) | {movie.runtime} mins <br /> Release date : {movie.release_date}</p> 
              <p>{movie.overview ? movie.overview.slice(0,138) : ''}...</p>
              <div className="lisetGenres">
                {movie.genres ? movie.genres.map(item=>{
                                return <div className="genresCard">
                                        {item.name}
                                    </div>
                }) : undefined}
              </div>
              
            </div>
        </div>
        <img src={Basic_pathImg + movie.poster_path} alt="poster" className="Poster" />
        <div className="homepage">
            <div>
                <a href={movie.homepage}>Home Page</a> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-up-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5"/>
                <path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </div>
            <div>
                <a href={`https://www.youtube.com/embed/${Videos && Videos[0] && Videos[0].key}`}>Watch Trailer</a> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
                </svg>
            </div>
        </div>

        
    </div>
}

export default Movie;