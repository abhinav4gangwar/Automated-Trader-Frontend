import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import React from "react"

import Axios from "axios"

export default function StrategyForm () {

    return(         <Card style={{borderRadius: "15px"}} className = 'px-1 py-4 my-2 secondary'>

    <Container fluid='fluid' className='p-0'>
    <Row style={{margin:'auto', width:"100%"}} className='mb-4'>
    <h5 className=' white'>Assign Strategy</h5>
    </Row> 

    <Row style={{margin:'auto', width:"100%"}}>   
        <Form>
            <Form.Label><h6>Select Stock</h6></Form.Label>
            <Form.Select className='mb-4' style={{border : "none", backgroundColor : "#31353F", height : "7vh"}} >
                <option>Select Stock</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>    
            <Form.Label><h6>Select Strategy</h6></Form.Label>          
            <Form.Select className='mb-4' style={{border : "none", backgroundColor : "#31353F", height : "7vh"}} >
                <option>Select Strategy</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select> 
            <Form.Group className="mb-4"  controlId="formBasicEmail">
                <Form.Label><h6>Enter Amount</h6></Form.Label>
                <Form.Control  style={{border : "none", backgroundColor : "#31353F", height : "7vh"}}  placeholder="Enter Amount (in Rupees)" />
            </Form.Group>              
            <Form.Group className="mb-4"  controlId="formBasicEmail">
                <Form.Label><h6>No. of Days</h6></Form.Label>
                <Form.Control  style={{border : "none", backgroundColor : "#31353F", height : "7vh"}}  placeholder="No. of Days to run the strategy" />
            </Form.Group>  
            <Button style={{width: "100%", height : "7vh"}}>Assign Strategy</Button>         

        </Form>
    </Row>

       


    </Container>
</Card>
    
    
    ) 

}