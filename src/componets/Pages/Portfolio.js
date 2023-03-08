import React from 'react';
import Card from '../Cards';
import images from "../assets/images/projects"

const projects = [
  {
    id: 1,
    img: images[0],
    alt: "Note Taker",
    link: 'https://notetakersexpress.herokuapp.com/',
    name: "Note Taker",
    repo: 'https://github.com/fgeorge206/Note-Taker'
  },
  {
    id: 2,
    img: images[1],
    alt: "Review World",
    link: 'https://review-world.herokuapp.com/login',
    name: "Review World",
    repo: 'https://github.com/hornickjohn/review-world'
  },
  {
    id: 3,
    img: images[2],
    alt: "Balling on a Budget",
    link: 'https://nhancoding.github.io/Balling-on-a-Budget/',
    name: "Balling on a Budget",
    repo: 'https://github.com/Nhancoding/Balling-on-a-Budget'
  },
  {
    id: 4,
    img: images[3],
    alt: "Password Generator",
    link: 'https://fgeorge206.github.io/Password-Generator/',
    name: "Password Generator",
    repo: 'https://github.com/fgeorge206/Password-Generator'
  },
]

export default function Portfolio() {
  return (
    // <div className='container mt-5'>
    //   <h1>Portfolio Page</h1>
    //   <div className='container'>
    //     <div className='row'>
    //       <div className='card col'>
    //         <a href='https://notetakersexpress.herokuapp.com/' target={'_blank'} imgsrc="../assets/images/note-taker.png">Note Taker</a>
    //       </div>
    //       <div className='card col'>
    //         Portfolio 2
    //       </div>
    //     </div>
    //     <div className='row'>
    //       <div className='card col'>
    //         Portfolio 3
    //       </div>
    //       <div className='card col'>
    //         Portfolio 4
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      {projects.map(projects=><Card id={projects.id} name={projects.name} alt={projects.alt} link={projects.link} images={projects.img}/>)}
    </div>
  );
}
