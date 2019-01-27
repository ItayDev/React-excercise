import React, { Component } from 'react'
import {Jumbotron, Row, Col} from "reactstrap";

import imgSrc from "../resources/Book-Shop.png";

import location from "../models/shopLocation";
import CountryInfo from "./CountryInfo";

export default class AppHome extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
            <Row>
                <Col md={12}>
                <h1 className="text-center">Welcome To Cool Book Shop!</h1>
                </Col>
                <Col md={12}>
                <img alt="shop" src={imgSrc} className="img-fluid rounded"/>
                </Col>
                <Col md={{size: 8, offset: 4}}>
                    <h4>{location.address.street} - {location.address.city}</h4>
                </Col>
                <CountryInfo />
            </Row>
        </Jumbotron>
      </div>
    )
  }
}
