import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import resume from '../assets/docs/Febin.George Resume.pdf';

export default function Resume() {
  return (
    <Container className='p-5'>
      <h1>Resume Page</h1>
      <Row>
          <Col>
            <Button variant="primary" size="lg" href={resume} download>Download Resume</Button>{' '}
          </Col>
      </Row>
    </Container>
  );
}
