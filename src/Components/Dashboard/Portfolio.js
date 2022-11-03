import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import React from "react"

export default function Portfolio() {
    return ( 
        <Card style={{borderRadius: "15px"}} className = 'px-1 py-4 my-2 secondary'>

            <Container fluid='fluid' className='p-0'>
            <Row style={{margin:'auto', width:"100%"}} className='mb-4'>
            <h5 className=' white'>Portfolio</h5>
            </Row> 
                <Row style={{margin:'auto', width:"100%"}} className='mb-4'>
                    <Col className='col-auto'><Image src='/dashboard/images/btc.svg'/></Col>
                    <Col>
                    <Row><h6 className='white mb-2'>Tata Steel</h6></Row>
                    <Row><h6 className='grey' style={{fontSize : "0.9rem"}}>₹ 4,000</h6></Row>
                    </Col>                    
                    <Col>
                    <Row className='text-end'><h6 style={{fontSize : "0.9rem"}} className='green mb-2'>+0.16</h6></Row>
                    <Row className='text-end'> <h7 className='grey' >₹ 13.21</h7></Row>
                    </Col>
                </Row>                
                <Row style={{margin:'auto', width:"100%"}} className='mb-4'>
                    <Col className='col-auto'><Image src='/dashboard/images/btc.svg'/></Col>
                    <Col>
                    <Row><h6 className='white mb-2'>Tata Steel</h6></Row>
                    <Row><h6 className='grey' style={{fontSize : "0.9rem"}}>₹ 4,000</h6></Row>
                    </Col>                    
                    <Col>
                    <Row className='text-end'><h6 style={{fontSize : "0.9rem"}} className='green mb-2'>+0.16</h6></Row>
                    <Row className='text-end'> <h7 className='grey' >₹ 13.21</h7></Row>
                    </Col>
                </Row>                
                <Row style={{margin:'auto', width:"100%"}} className='mb-4'>
                    <Col className='col-auto'><Image src='/dashboard/images/btc.svg'/></Col>
                    <Col>
                    <Row><h6 className='white mb-2'>Tata Steel</h6></Row>
                    <Row><h6 className='grey' style={{fontSize : "0.9rem"}}>₹ 4,000</h6></Row>
                    </Col>                    
                    <Col>
                    <Row className='text-end'><h6 style={{fontSize : "0.9rem"}} className='green mb-2'>+0.16</h6></Row>
                    <Row className='text-end'> <h7 className='grey' >₹ 13.21</h7></Row>
                    </Col>
                </Row>                
                <Row style={{margin:'auto', width:"100%"}} className='mb-4'>
                    <Col className='col-auto'><Image src='/dashboard/images/btc.svg'/></Col>
                    <Col>
                    <Row><h6 className='white mb-2'>Tata Steel</h6></Row>
                    <Row><h6 className='grey' style={{fontSize : "0.9rem"}}>₹ 4,000</h6></Row>
                    </Col>                    
                    <Col>
                    <Row className='text-end'><h6 style={{fontSize : "0.9rem"}} className='green mb-2'>+0.16</h6></Row>
                    <Row className='text-end'> <h7 className='grey' >₹ 13.21</h7></Row>
                    </Col>
                </Row>                
                <Row style={{margin:'auto', width:"100%"}} >
                    <Col className='col-auto'><Image src='/dashboard/images/btc.svg'/></Col>
                    <Col>
                    <Row><h6 className='white mb-2'>Tata Steel</h6></Row>
                    <Row><h6 className='grey' style={{fontSize : "0.9rem"}}>₹ 4,000</h6></Row>
                    </Col>                    
                    <Col>
                    <Row className='text-end'><h6 style={{fontSize : "0.9rem"}} className='green mb-2'>+0.16</h6></Row>
                    <Row className='text-end'> <h7 className='grey' >₹ 13.21</h7></Row>
                    </Col>
                </Row>

            </Container>
        </Card>
    )
}