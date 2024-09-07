import React , {useState , useEffect} from "react";
import CardFilm from "../components/cardFilm";
import { useParams } from "react-router-dom";
import './ListMovies.css';

function ListMovies(){
    const [movies , SetMovies] = useState([])
    const {type} = useParams()
    function getData(){
        const url = `https://api.themoviedb.org/3/movie/${type?type : 'popular'}`;
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzRkNjc0NWVhMzhjYTA5Y2Y0N2QxMGVkZThjODJiMyIsIm5iZiI6MTcyNDIxMzk5Ny45ODk3NzcsInN1YiI6IjY2YmM3OGJhYjBmYWRhMzg1MGMzNTNhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MIVRtlN1okjmxo5qXKx0wcjsXMLzkb-6P0Jkaz3WWP8'
        }
        };

        fetch(url, options)
        .then(res => res.json())
        .then(json => SetMovies(json.results))
        .catch(err => console.error('error:' + err));
    } 
    useEffect(() => {getData()} , [type])
    return <main id="trend" className="section container-fluid">
        <h4 className="section-title">
            {type === 'popular' ? 'Trending movies' : ''}
            {type === 'top_rated' ? 'Top rated' : ''}
            {type === 'upcoming' ? 'Upcoming' : ''}
        </h4>
        <div className="d-flex flex-wrap container">
            {movies.map(movie => <CardFilm movie = {movie}/>)}
        </div>
    </main>
}
export default ListMovies;