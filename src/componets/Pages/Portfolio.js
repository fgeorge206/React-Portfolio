import React from 'react';
import Card from '../Cards';
import images from "../assets/images/projects"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
  {
    id: 5,
    img: images[4],
    alt: "How To Train Your Dragon Quiz",
    link: 'https://fgeorge206.github.io/Quiz-Application/',
    name: "How To Train Your Dragon Quiz",
    repo: 'https://github.com/fgeorge206/Quiz-Application'
  },
]

export default function Portfolio() {
  return (
    <Container>
      <Row sm={2}>
          {projects.map(projects=>
          <Col>
            <Card id={projects.id} name={projects.name} alt={projects.alt} link={projects.link} images={projects.img}/>
          </Col>
            )}
      </Row>
    </Container>
  );
}
