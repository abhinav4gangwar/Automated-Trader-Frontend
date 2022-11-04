import Axios from "axios"
import React from "react"
import {useState} from "react"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Popup from 'reactjs-popup'

import "./popup.css"


function formatData (stkData){
    if (stkData){
      return `${Number(stkData.toFixed(2)).toLocaleString()}`}
  }


export default function BuySell (props) {

    const [buyForm, setBuyForm] = useState('none')
    const [sellForm, setSellForm] = useState('none')
    const [StockQuantity, setStockQuantity] = useState(null)

    const handleBuySubmit = async () => {
        var orderObj = {username : props.user,
                        type : "buy",
                        symbol : props.order.symbol,
                        name : props.order.name,
                        currency : props.order.currency,
                        quantity :  StockQuantity,
                        price : props.tick.close,
                        date : props.tick.date
        }
        // console.log(orderObj)

        const res = await Axios.post("http://localhost:3001/api/stock/buy-stock", orderObj)

        console.log(res)
        

    }    
    const handleSellSubmit = async () => {
        var orderObj = {username : props.user,
                        type : "sell",
                        symbol : props.order.symbol,
                        name : props.order.name,
                        currency : props.order.currency,
                        quantity :  StockQuantity,
                        price : props.tick.close,
                        date : props.tick.date
        }
        // console.log(orderObj)
        const res = await Axios.post("http://localhost:3001/api/stock/sell-stock", orderObj)

    }

    const clickBuy = () =>{
        setBuyForm('');
        setSellForm('none')
    }
    
    const clickSell = () =>{
        setBuyForm('none');
        setSellForm('')
    }

    const addFav = async () =>{
        const res = await Axios.post("http://localhost:3001/api/stock/add-fav",{username : props.user, symbol:props.symbol})
        // console.log(res)
    }
    return ( 
        <Container className ='mb-5 px-0'>
            <Row className="mb-5">
                <Col><Button style={{border : "0px" ,fontSize : "0.9rem", padding : "0.77rem 1.4rem 0.7rem 1.4rem "}} onClick={addFav}>Add to Favourite</Button></Col>
                <Col className="text-end" md={1}><Button className="" style={{border : "0px",backgroundColor : "green" ,fontSize : "0.9rem", padding : "0.77rem 1.4rem 0.7rem 1.4rem "}} onClick={clickBuy}>Buy</Button></Col>
                <Col className="text-end" md={1}><Button className="" style={{border : "0px",backgroundColor : "red" ,fontSize : "0.9rem", padding : "0.77rem 1.4rem 0.7rem 1.4rem "}} onClick={clickSell}>Sell</Button></Col>       
            </Row>
            <Row style={{display : buyForm}}>
                <Col className="col-auto my-auto me-5"><h6>{props.order.name} - {props.order.symbol} ({props.order.currency})</h6><p>{formatData(props.tick.close)}</p></Col>
                <Col className=" me-5">
                    <Form>           
                        <Form.Control required style={{border: "none", borderRadius : 10, fontSize: "0.8rem"}} className='secondary py-3' placeholder="Enter Qunatity"  onChange={(e) => setStockQuantity(e.target.value)}/>
                    </Form>
                </Col>
                <Col className="col-auto my-auto me-5"><h6>Final Price</h6>{StockQuantity ? <p>{formatData(props.tick.close)} * {StockQuantity} = {formatData(props.tick.close*StockQuantity)}</p> : <></>}</Col>
                <Col>
                    <Button style={{border: "none", borderRadius : 10, fontSize: "0.8rem", }}  className='primary py-3 w-100' type="button" onClick={handleBuySubmit}>
                        Buy Stock
                    </Button>
                </Col>  
            </Row>
            <Row style={{display : sellForm}}>
                <Col className="col-auto my-auto me-5"><h6>{props.order.name} - {props.order.symbol} ({props.order.currency})</h6><p>{formatData(props.tick.close)}</p></Col>
                <Col className=" me-5">
                    <Form>           
                        <Form.Control required style={{border: "none", borderRadius : 10, fontSize: "0.8rem"}} className='secondary py-3' placeholder="Enter Qunatity"  onChange={(e) => setStockQuantity(e.target.value)}/>
                    </Form>
                </Col>
                <Col className="col-auto my-auto me-5"><h6>Final Price</h6>{StockQuantity ? <p>{formatData(props.tick.close)} * {StockQuantity} = {formatData(props.tick.close*StockQuantity)}</p> : <></>}</Col>
                <Col>
                    <Button style={{border: "none", borderRadius : 10, fontSize: "0.8rem", }}  className='primary py-3 w-100' type="button" onClick={handleSellSubmit}>
                        sell Stock
                    </Button>
                </Col>  
            </Row>
        </Container>)
}