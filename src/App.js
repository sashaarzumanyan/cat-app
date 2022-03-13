import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CatList from './components/CatList'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
const App = () => {

  return (
    <Container>
      <Row>
        <NavBar />
      </Row>
      <Row>
        <CatList />
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  )
}

export default App