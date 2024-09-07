import React from "react";
import './Modal.css'

function Modal(props){
    return <div className= {`movieModal ${props.check? 'active': undefined}`}>
        <a href="#" className="modalClose" onClick={() => {props.handClose()}}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>
        </a>
        <iframe width="780" height="500" src={`https://www.youtube.com/embed/${props.movie.key}`}
        title={props.title}
        loading="lazy" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen></iframe>

    </div>
}

export default Modal;