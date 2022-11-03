import Axios from "axios"
import React from "react"
import {useState} from "react"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactChart from "./ReactChart"
import BuySell from "./BuySell";

import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import AuthService from "../../services/auth.service";



export default function Chart() {

    const currentUser = AuthService.getCurrentUser();

    const [queryList, setQueryList] = useState([])
    const [symbol, setSymbol] = useState("")
    const [data,setData] = useState([])
    const [callChart, setCallChart]= useState(false)
    const [query, setQuery] = useState("");
    const [orderObj, setOrderObj] = useState({})
    const [tick, setTick] = useState({})


    async function getSymbol (query) {
        // console.log(query)
        if (query.length > 4){
            var url = `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&apikey=e3469879f480eebc71d6cef8788541a6`

            const res = await Axios.get(url)
            setQueryList(res.data)
            // console.log(res.data)
        }
    }
    getSymbol(query)

    const inputChange = (e) =>{
        // console.log(1)
        setQuery(e.target.value)
        // console.log(query)
        setSymbol(e.length>0 ? e[0].split("-")[1] : "")

    }

    const handleSubmit =async ()=>{

        const res = await Axios.post("http://localhost:3001/api/stock/search-stock",{symbol})
        console.log(res.data)
        var temp = res.data[res.data.length-1]
        setTick(temp)
        var temp = res.data
        var temp2 = temp.map(function (i){
            return {open : i.open,
                close : i.close,
                high : i.high,
                low : i.low,
                volume : i.volume,
                date : new Date(i.date)}
        })
        // console.log(temp2)
        setData(temp2)
        setCallChart(true)
    }

    // var names = queryList.map(function(queries) {
    //     return `${queries['name']} (${queries["stockExchange"]}) - ${queries['symbol']}`;
    //   });

    const handleOnSearch = async (string, results) => {
            var url = `https://financialmodelingprep.com/api/v3/search?query=${string}&limit=10&apikey=e3469879f480eebc71d6cef8788541a6`

            const res = await Axios.get(url)
            setQueryList(res.data)


    }

    const handleOnHover = (result) => {
    }

    const handleOnSelect = (item) => {
    var temp = {}
    temp.symbol = item.symbol
    temp.name = item.name
    temp.currency = item.currency
    setOrderObj(temp)
    // the item selected
    setSymbol(item.symbol)
    console.log(item)
    }




    const formatResult = (item) => {
    return (
        <>
        <span style={{ display: 'block', textAlign: 'left' }}>id: {item.symbol}</span>
        <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
        <span style={{ display: 'block', textAlign: 'left' }}>name: {item.currency}</span>
        </>
    )
    }

    return(
        <Container className="mb-59">
            <Container className = 'text-center mx-0 p-0 mb-4'>
                <Row >
                <Col><ReactSearchAutocomplete style={{borderRadius: "10px", fontSize: "0.8rem", height: "100%" }}
                        items={queryList}
                        onSearch={handleOnSearch}
                        onHover={handleOnHover}
                        onSelect={handleOnSelect}
                        autoFocus
                        formatResult={formatResult}
                /></Col>
                    <Col  md={"auto"}><Button style={{border: "none", fontSize: "0.8rem", height: "100%" }}  className='primary px-4' type="button" onClick={handleSubmit}>
                                                            Search
                                                        </Button></Col>
                </Row>
            </Container>

            <Container className="bg-dark rounded">{callChart ? <ReactChart type = "hybrid" data={data} width={750} /> : <></> }</Container>
            <br />
            {callChart ? <BuySell user ={currentUser} symbol={symbol} order={orderObj} tick={tick}/> : <></> }


        </Container>


    )
}