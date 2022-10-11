import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import protobuf from 'protobufjs'
import React from "react";
import { useEffect, useState,useRef } from 'react'
import LiveDataCard from './LiveDataCard';
var { Buffer } = require ('buffer/');


export default function LiveData() {
    const ref = useRef(null);
    const [nsei,setNsei] = useState({})
    const [bsesn,setBsesn] = useState({})
    const [gdaxi,setGdaxi] = useState({})
    const [fchi,setFchi] = useState({})
    // const [stockData,setStockData] = useState({})

    useEffect(()=>{

        const ws = new WebSocket('wss://streamer.finance.yahoo.com');
        const root = protobuf.load('./YPricingData.proto', (error,root) => {
        
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
                
                console.log(next)
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
                    
                    
  

                }


            };
        
        });
        console.log("use effect")
        
        },[]) 


    return ( <>
    
    <Container fluid className='mx-0 p-0'>
        <Row margin= {"auto"} fluid className='d-flex justify-content-between'>
            <LiveDataCard stockData={nsei} id={"NSEI"} name={"Nifty-50"} img={"https://s3-symbol-logo.tradingview.com/indices/nifty-50.svg"}/> 
            <LiveDataCard stockData={bsesn} id={"BSESN"} name={"Sensex"} img={"https://s3-symbol-logo.tradingview.com/indices/bse-sensex.svg"}/> 
            <LiveDataCard stockData={gdaxi} id={"GDAXI"} name={"DAX"} img={"https://s3-symbol-logo.tradingview.com/indices/nifty-50.svg"}/> 
            <LiveDataCard stockData={gdaxi} id={"GDAXI"} name={"DAX"} img={"https://s3-symbol-logo.tradingview.com/country/DE.svg"}/> 
            <LiveDataCard stockData={fchi} id={"FCHI"} name={"CAC"} img={"https://s3-symbol-logo.tradingview.com/indices/cac-40.svg"}/> 
            {/* <LiveDataCard stockData={nsei} />  */}



        </Row>
    </Container>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />


        </>
    )
}