import React from 'react'

import {Col} from "reactstrap"

import location from "../models/shopLocation";

export default function CountryInfo() {
  return (
    <div>
        <Col md={{size:4, offset: 4}}>
            <p>{location.location.country}</p>
        </Col>
        <Col md={4}>
            <img src={location.location.flag} alt="Israel" />
        </Col>
    </div>
  )
}
