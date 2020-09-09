import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, Jumbotron } from 'reactstrap';
import {  Link } from "react-router-dom";

const Home = (props) => {
  return (
    <Jumbotron>
    <h1 className="display-3" id="hello">Hello, peeps!</h1>
    <Row className="row">
      <Col sm="4">
        <Card body className="card">
          <CardTitle className="cardTitle">NASA</CardTitle>
          <CardText  className="cardText">Grabs a satellite image from NASA Earth API matching your location</CardText>
          <Link to='/nasa' className="btn btn-secondary" id="xbutton"><Button id="button"> Check it out! </Button></Link>
        </Card>
      </Col>
      <Col sm="4">
        <Card body className="card">
          <CardTitle className="cardTitle">Open Weather</CardTitle>
          <CardText  className="cardText">Will display the weather in your current location, getting the data from Open Weather API</CardText>
          <Link to='/weather' className="btn btn-secondary" id="xbutton"><Button id="button" >What's the weather today?</Button></Link>
        </Card>
      </Col>
      <Col sm="4">
        <Card body className="card">
          <CardTitle className="cardTitle">Restaurants</CardTitle>
          <CardText className="cardText">Find the top 10 best restaurants in your area using Zomato's API</CardText>
          <Link to='/restaurant' className="btn btn-secondary" id="xbutton"><Button id="button" >I'm hungry already!</Button></Link>
        </Card>
      </Col>
    </Row>
    </Jumbotron>
  );
};

export default Home;