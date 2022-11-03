import Axios from 'axios'
// import React from 'react'
import {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react"
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';

import NewsCard from './NewsCard'

export default function News() {

    const [newsList, setNewsList] = useState([])
    useEffect(() => {
        Axios.get("https://bps-app.herokuapp.com/news-update").then(res => [
            setNewsList(res.data.articles)
        ])
    }, []);

    

    return(
        <Container fluid="fluid">
            <h3  className='text-center white mb-5'> Daily News Updates</h3>
            <Row className='row-cols-2 gy-4'>
                {newsList.map((article,i) =>(
                    <Col><NewsCard key={i} title={article.title} desc={article.desc} date={article.date} img = {article.img} url={article.url}/></Col>
                ))}
                
            </Row>
        </Container>

    )
}