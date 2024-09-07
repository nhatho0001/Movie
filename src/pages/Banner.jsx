import React , {useState , useEffect} from "react";
import fetch from "node-fetch";
import "./Banner.css";
import PointIndex from "../components/conveyorIndex";
import CarouselCard from "../components/carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Banner(){
    const [Movies, SetMovies] = useState([])
    const [Videos , setVideos] = useState([])
    const [checked , setChecked] = useState(false)
    //const [MovieTitle, SetTitle] = useState({})
    //const [index_movie , setIndex] = useState(0)

    const  getData = () => {
        const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzRkNjc0NWVhMzhjYTA5Y2Y0N2QxMGVkZThjODJiMyIsIm5iZiI6MTcyMzYyNzkzMi43ODk5NDMsInN1YiI6IjY2YmM3OGJhYjBmYWRhMzg1MGMzNTNhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wpAhlJqPj8-HFJJW2QHSpuM89Frhn9L7exn4t_T9AJs'
          }
        };
        fetch(url, options)
        .then(res => res.json())
        .then(res => {SetMovies(res.results)})
        .catch(err =>{console.error('error:' + err)});
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
      .then(json => {setVideos(json.results)})
      .catch(err => console.error('error:' + err));
      setChecked(!checked)
    }

    function Close(){
      setChecked(!checked)
    }
    useEffect(() => {getData()} , [])
    return <Carousel showThumbs = {false} 
        autoPlay = {checked? false : true}
        transitionTime={6}
        infiniteLoop = {true}
        showStatus = {false}>
            {Movies.map(props =>{return <CarouselCard key = {props.id}
             clickHear = {handleVideo}
             id = {props.id}
             backdrop_path = {props.backdrop_path}
             title = {props.title} 
             overview = {props.overview}
             vote_average = {props.vote_average}
             vote_count = {props.vote_count}
             release_date = {props.release_date}
             videos = {Videos}
             Check = {checked}
             handClose = {Close}
              />} )}
        </Carousel>
        
}
export default Banner;