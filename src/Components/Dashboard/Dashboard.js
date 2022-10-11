import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LiveData from "./LiveData"
import Wallet from "./Wallet"
import Portfolio from "./Portfolio"
import Chart from "./Chart"
import Strategies from "./Strategies"

export default function Dashboard (){
    return(
<Container fluid="fluid" >
              <Row margin= {"auto"}><LiveData/></Row>
              <Row margin= {"auto"} className='gx-5'>
                <Col md={4} className='m-0 p-0' >
                <Row ><Wallet/></Row>
                <Row><Portfolio/></Row>
                </Col>
                <Col md={8}>
                <Row><Chart/></Row>
                <Row><Strategies/></Row>
                </Col>
              </Row>
              
</Container>
    )
} 