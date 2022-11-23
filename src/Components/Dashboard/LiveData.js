import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import protobuf from 'protobufjs'
import React from "react";
import { useEffect, useState } from 'react'
import LiveDataCard from './LiveDataCard';
import Axios from "axios"
var { Buffer } = require ('buffer/');



export default function LiveData() {
    const [nsei,setNsei] = useState({})
    const [bsesn,setBsesn] = useState({})
    const [gdaxi,setGdaxi] = useState({})
    const [ixic,setIxic] = useState({})
    const [fchi,setFchi] = useState({})
    // const [stockData,setStockData] = useState({})

    useEffect(()=>{

        Axios.get("http://localhost:3002/get-nsei").then( (res) =>{
            setNsei({price : res.data.price,
                changePercent : res.data.changePercent})
        })        
        Axios.get("http://localhost:3002/get-bsesn").then( (res) =>{
            setBsesn({price : res.data.price,
                changePercent : res.data.changePercent})
        })        
        Axios.get("http://localhost:3002/get-ixic").then( (res) =>{
            setIxic({price : res.data.price,
                changePercent : res.data.changePercent})
        })        
        Axios.get("http://localhost:3002/get-gdaxi").then( (res) =>{
            setGdaxi({price : res.data.price,
                changePercent : res.data.changePercent})
        })        
        Axios.get("http://localhost:3002/get-fchi").then( (res) =>{
            setFchi({price : res.data.price,
                changePercent : res.data.changePercent})
        })

        const ws = new WebSocket('wss://streamer.finance.yahoo.com');
        protobuf.load('./YPricingData.proto', (error,root) => {
        
            if(error){
                console.log(error);
            }
        
            const Yaticker = root.lookupType("yaticker");   
        
        
            ws.onopen = function open() {
            console.log('connected');
            ws.send(JSON.stringify({
                subscribe: ["^NSEI", "^BSESN", "^IXIC", "^GDAXI", "^FCHI", "^BZ=F", "^DJI"]
            }));
            };
        
            ws.onclose = function close() {
            console.log('disconnected');
            };
        
            ws.onmessage = async function incoming(message) {
                const next = Yaticker.decode(new Buffer(message.data, 'base64'));
                
                // console.log(next)
                // console.log(stockData)

                switch (next.id) {
                case "^NSEI":
                    setNsei(next);
                    break;                
                case "^BSESN":
                    setBsesn(next);
                    break;                
                case "^GDAXI":
                    setGdaxi(next);
                    break;                
                case "^FCHI":
                    setFchi(next);
                    break;                
                case "^IXIC":
                    setIxic(next);
                    break;
                default:
                    break;
                    
                    
  

                }


            };
        
        });
        console.log("use effect")
        
        },[]) 


    return ( <>
    
    <Container fluid="fluid" className='mx-0 p-0'>
        <Row style={{margin:"auto"}} fluid='fluid' className='d-flex justify-content-between'>
            <LiveDataCard stockData={nsei} id={"NSEI"} name={"Nifty-50"} img={"https://s3-symbol-logo.tradingview.com/indices/nifty-50.svg"}/> 
            <LiveDataCard stockData={bsesn} id={"BSESN"} name={"Sensex"} img={"https://s3-symbol-logo.tradingview.com/indices/bse-sensex.svg"}/> 
            <LiveDataCard stockData={ixic} id={"IXIC"} name={"Nasdaq"} img={"https://s3-symbol-logo.tradingview.com/indices/nasdaq-composite.svg"}/> 
            <LiveDataCard stockData={gdaxi} id={"GDAXI"} name={"DAX"} img={"https://s3-symbol-logo.tradingview.com/country/DE.svg"}/> 
            <LiveDataCard stockData={fchi} id={"FCHI"} name={"CAC"} img={"https://s3-symbol-logo.tradingview.com/indices/cac-40.svg"}/> 
            {/* <LiveDataCard stockData={nsei} />  */}



        </Row>
    </Container>



        </>
    )
}