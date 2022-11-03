import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';



export default function NewsCard(props) {
    return(
        <Card className='secondary p-4 mb-2' style={{borderRadius: "15px", }}>
            <Container className='p-0'>
                <Row className='mb-3'>
                    <Col className='col-auto'><Image style={{height: "25vh", width: "12vw", objectFit : "cover", borderRadius:"15px"}} src={props.img}></Image></Col>
                    <Col>
                    <Row><h6 className='white mb-4' style={{lineHeight : "1.5"}}>{props.title ? props.title : "no title found for the article"}</h6></Row>
                    
                    <Row><p className='grey mb-4' style={{fontWeight : "300", fontSize : ""}}>{props.desc ? props.desc : "no description found for the article"}</p></Row>

                    <Row style={{margin:"auto"}}>
                        <Button href={props.url} style={{width : "40%", fontSize:"0.9rem"}}>Read More</Button>
                    </Row>
                    
                    </Col>
                </Row>
                <Row>
                    <Col><h7 className='primary-color'>{props.date}</h7></Col>
                <Col className='text-end'><h7 className='grey'> Source : MoneyControl</h7></Col>
                </Row>
            </Container>
        </Card>
    )
}