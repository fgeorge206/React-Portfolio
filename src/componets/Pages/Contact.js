import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Contact({handleFormChange,postText, userName}) {
  return (
    <Container className='p-5'>
      <Row>
        <Col className='p-5 m-5'>        
          <form className='container card mb-3 p-3'>
            <input className='form-control' name="userName" type="text" placeholder='What is your name?'value={userName}onChange={handleFormChange}/>
            <br/>
            <input className='form-control' name="userEmail" type="text" placeholder='What is your email?'value={userName}onChange={handleFormChange}/>
            <br/>
            <textarea className='form-control' rows={"3"} name="postText" placeholder='What do you want to say?'value={postText} onChange={handleFormChange}/>
            <br/>
            <button type="button" className='btn btn-primary'>Submit</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
