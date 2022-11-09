import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
// import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

class Rangkaa extends React.Component {
  render (){
    return(
    <>
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">News</Navbar.Brand>
                <Navbar.Toggle />
            </Container>
        </Navbar>
    </>
      )
  };
}

export default Rangkaa