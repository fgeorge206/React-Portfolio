import React from 'react'
// import images from "./assets/images";

export default function Card(props) {
  return (
    <div className="container text-center">
      <div className="card">
        <img className="card-img-top" src={props.images} alt={props.alt}/>

        <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
          <a href="#" className="btn btn-primary">
            {props.name}
          </a>
        </div>
      </div>
    </div>
  );
}
