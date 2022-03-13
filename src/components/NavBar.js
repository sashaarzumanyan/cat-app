import React, { useEffect } from 'react'
import { Container, Navbar, Nav, NavDropdown, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getCatMiddleware } from '../redux/thunkMiddleware/getCatMiddleware'
import { getCatPng } from '../redux/thunkMiddleware/getCatPng'

const NavBar = () => {

    const { category } = useSelector(state => state)

    const dispatch = useDispatch()

    const handleClick = (e) => {
        dispatch(getCatPng(e,undefined))
        console.log("e&id ", e);
    }

    useEffect(() => {
        dispatch(getCatMiddleware())
    }, [])
    return (
        <Navbar bg="primary" variant="dark" >
            <Container>
                <Row>
                    <Navbar.Brand >Cat APP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Row>
                <Row>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Documents</Nav.Link>
                            <NavDropdown title="Category" id="basic-nav-dropdown">
                                {category.map((e) =>
                                    <NavDropdown.Item onClick={() => handleClick(e.id)} key={e.id} >{e.name}</NavDropdown.Item>
                                )}
                                <NavDropdown.Divider />
                                <NavDropdown.Item >Category</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Row>
            </Container>
        </Navbar>
    )
}

export default NavBar