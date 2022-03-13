import React, { useEffect } from 'react'
import { Card, Container, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getCatPng } from '../redux/thunkMiddleware/getCatPng'

const CatList = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCatPng())
  }, [])
  const { cats, loading } = useSelector(state => state)
  return (
    <Container className='d-flex p-3'>
      <Row>
        {cats.map((e) =>
          <Col key={e.id}>
            <Card
              key={e.id}
              style={{ width: '18rem', height: '90%' }}
            >
              <Card.Img
                key={e.id}
                style={{ width: '100%', height: '50%' }}
                variant="top"
                src={e.url}
              />
              <Card.Body>
                <Card.Title>Cats Image</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Show Image</Button>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </Container>

    /* <div>
        {cats.map((e)=>
            <img className='catImg' key={e.id} src={e.url} alt={'sds'} />
        )}
    </div> */
  )
}

export default CatList