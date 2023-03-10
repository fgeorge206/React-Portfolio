import React from 'react';
import { Container } from 'react-bootstrap';
import Portrait from "../assets/images/developer.png";
import Figure from 'react-bootstrap/Figure';


export default function About() {
  return (
    <Container className='container p-5'>
      <h1>About Page</h1>
      {/* <Image roundedCircle  fluid src={Portrait}></Image> */}
      <Figure>
      <Figure.Image roundedCircle
        width={171*2}
        height={180*2}
        alt="171x180"
        src={Portrait}
      />
    </Figure>
      <p>
        <h5>Hello, welcome to my portfolio! I am a Seattle native who is new to coding. I am striving to learn and improve on my skills every day. I am a musician and avid video gamer trying to find his place in life. After taking the University of Washington bootcamp, I can say that I want a career in coding.</h5>
      </p>
    </Container>
  );
}
