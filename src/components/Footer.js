import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { getCatPng } from '../redux/thunkMiddleware/getCatPng'

const Footer = () => {
    const [limit, setLimit] = useState(10)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCatPng(undefined,limit))
    },[limit])
    const handleAddList = () => {
        setLimit(limit + 10)
    }
    return (
        <Container>
            <Row>
                <Col>
                    <Button onClick={handleAddList} variant='primary'>Load More</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer