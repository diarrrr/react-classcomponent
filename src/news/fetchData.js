import React, { Component, useState } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import SearchBar from "./searchbar";


var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=dfd68156c3b747a0bb966b59ade084eb';
var req = new Request(url);


  

class Fetch extends Component {
       state = {
            news: []
        };
    
    handleInputChange = (event) => {
            const query = event.target.value;
        
            this.setState((prevState) => {
              const filteredData = prevState.data.filter((element) => {
                return element.name.toLowerCase().includes(query.toLowerCase());
              });
              return {
                query,
                filteredData,
              };
            });
          };

    componentDidMount(){
        fetch(req)
            .then((response)=> {
            (response.json())
            .then((data)=>{
            let artikel = data.articles
            this.setState({news: artikel})
            })
            .catch(e => {
                console.log(e);
            })});
         
        };

    render(){
        return(
            <>
                <SearchBar
                onChange={this.handleInputChange}
                />
                {this.state.news.map((berita) => (
                <Container>
                    <Row>
                        <Col className="md-3">
                        <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={berita.urlToImage} />
                <Card.Body>
                    <Card.Title>{berita.title}</Card.Title>
                    <Card.Text>{berita.description}</Card.Text>
                </Card.Body>
                </Card>
                        </Col>
                    </Row>
                </Container>
                             
                
                ))}
            </>    
       )       
    }
}
    


export default Fetch