import React from "react";
import './cardFilm.css'
import { Link } from "react-router-dom";
const Basic_pathImg = "https://image.tmdb.org/t/p/original"

function CardFilm(props){
    return <div className="CardFilm text-center col-lg-2 col-md-4 col-sm-6 mb-4">
            <div className="contentCard">
                <img src={Basic_pathImg+props.movie.poster_path} alt="img Film"/>
                <div className="icon-heart">
                    <h4>Rate: {Number(props.movie.vote_average).toFixed(1)}⭐</h4>
                    <Link to = {`/movie/${props.movie.id}`} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                        </svg>
                    </Link>
                    
                </div>
                <p>{props.movie.title}</p>
            </div> 
    </div>
}

export default CardFilm;