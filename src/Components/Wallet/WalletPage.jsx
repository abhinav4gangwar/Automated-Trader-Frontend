
import React from "react"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Portfolio from "./Portfolio"
import Fav from "./Fav"
import Wallet from "../Dashboard/Wallet"

import StrategyForm from "./StrategyForm";


export default function WalletPage() {
    return(
        <Container fluid="fluid" >
              <Row style={{margin:"auto"}}>
                <Col md={4} className='m-0 p-0 paddin-gap' >
                <Row style={{margin:"auto"}} ><Wallet/></Row>
                <Row style={{margin:"auto"}} ><StrategyForm/></Row>
                </Col>
                <Col md={4} className="m-0 p-0">
                <Row className="padding-left" style={{margin:"auto"}}><Fav/></Row>
                </Col>
                <Col md={4} className="m-0 p-0">
                <Row className="padding-left" style={{margin:"auto"}}><Portfolio/></Row>
                </Col>
              </Row>
              
</Container>
    )
}