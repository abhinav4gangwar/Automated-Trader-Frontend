import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react"
import LiveData from "./LiveData"
import Wallet from "./Wallet"
import Portfolio from "./Portfolio"
import Fav from "./Fav"
import Chart from "./Chart"
import Strategies from "./Strategies"
import Transactions from './Transactions';

export default function Dashboard (){
    return(
<Container fluid="fluid" >
              <Row style={{margin:"auto"}}><LiveData/></Row>
              <Row style={{margin:"auto"}}>
                <Col md={3} className='m-0 p-0 paddin-gap' >
                <Row style={{margin:"auto"}} ><Wallet/></Row>
                <Row style={{margin:"auto"}}><Fav/></Row>
                <Row style={{margin:"auto"}}><Portfolio/></Row>
                </Col>
                <Col md={9} className="m-0 p-0">
                {/* <Row><Chart/></Row> */}
                <Row fluid='fluid' className='padding-left' style={{margin:"auto"}}><Transactions/></Row>
                <Row fluid='fluid' className='padding-left' style={{margin:"auto"}}><Strategies/></Row>
                </Col>
              </Row>
              
</Container>
    )
} 