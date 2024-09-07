import React  from "react";
import Modal from "./Modal";

function CarouselCard(props){
    const Basic_pathImg = "https://image.tmdb.org/t/p/original"
    const Months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    
    return <div className="Banner"><div className="Movie">
    <div className="bg">
        <img src={Basic_pathImg + props.backdrop_path} alt="" className="imgbg active"/>
    </div>
    
    <div className="content d-flex flex-wrap">
        <div className="info-movie col-md-5 col-12 align-self-end">
            <h3 className="bungee-regular">{props.title}</h3>
            <p>{props.overview}</p>
            <div className="d-flex">
                <p>Rating : {Number(props.vote_average).toFixed(1)}</p>
                <p className="px-3">|</p>
                <p>Vote count : {props.vote_count}</p>
            </div>
        </div>
        <div className="Play col-md-7 col-12 d-flex flex-wrap justify-content-center align-self-end">
            <div className="col-12">
                <h4 className="release_date">ON {new Date(props.release_date).getDay()}TH <br></br> {Months[new Date(props.release_date).getMonth()]} </h4>
            </div>
            
            <div className="nodeDisplay d-flex" onClick={() => {props.clickHear(props.id)}}>
               <h4> Play Now   
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-play-circle-fill mx-1" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                </svg>
            </h4> 
            {props.videos && props.videos.length > 0 && <Modal title = {props.title} handClose = {props.handClose} movie = {props.videos[0]} check = {props.Check} />}
            </div>
            
        </div>
    </div>

</div></div>
}
export default CarouselCard;