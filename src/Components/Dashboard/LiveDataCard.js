import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'

function formatData (stkData){
    if (stkData){
      return `${Number(stkData.toFixed(2)).toLocaleString()}`}
  }


export default function LiveDataCard(props) {

    return(    
<>
            <Card className='secondary p-3 pb-0 mb-2 mx-1' style={{borderRadius: "15px", width:'15vw'}}>
                <Container className='p-0'>
                    <Row className='mb-3'>
                        <Col><Image className='p-0 rounded'  width={40} src={props.img}></Image></Col>
                        <Col>
                        <Row className='text-white'><h6 className='p-0'>{props.name}</h6></Row>
                        <Row className='text-white'>{props.id}</Row>
                        </Col>
                        <Col className='text-end'><Image width={15} src='/Dashboard/images/arrow-up.svg'></Image></Col>
                    </Row>
                    <Row>
                        <Col>
                        <Row><h6 className="white mb-1 ">${props.stockData ? formatData(props.stockData.price) : "30,000"}</h6></Row>
                        <Row><p style={{color: props.stockData ? (props.stockData.changePercent >=0 ? "green" : "red") : "green"}}>{props.stockData ? formatData(props.stockData.changePercent) : "0.2"}%</p></Row>
                        </Col>
                        <Col>
                        <Image width={80} src='/Dashboard/images/graph.svg'></Image></Col>
                    </Row>
                </Container>
            </Card>
    

</>
    )

}