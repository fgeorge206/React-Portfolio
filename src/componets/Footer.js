import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import  ghLogo  from './assets/images/icons8-github.svg';
import linkLogo from './assets/images/icons8-linkedin-circled.svg'
import tLogo from './assets/images/icons8-twitter.svg'


export const Footer = () => {
  return (
    <Container>
      <Row>
        <Col className='text-center'>
          <a href='https://github.com/fgeorge206' target='_blank' rel='noreferrer'>
            <img src={ghLogo}/>
          </a>
        </Col>
        <Col className='text-center'>
          <a href='https://www.linkedin.com/in/febingeorge98/' target='_blank' rel='noreferrer'>
            <img src={linkLogo}/>
          </a>
        </Col>
        <Col className='text-center'>
          <a href='https://twitter.com/febingeorge206' target='_blank' rel='noreferrer'>
            <img src={tLogo}/>
          </a>
        </Col>
      </Row>
    </Container>
  )
}
