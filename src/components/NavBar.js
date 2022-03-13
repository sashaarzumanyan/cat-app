import React, { useEffect } from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getCatMiddleware } from '../redux/thunkMiddleware/getCatMiddleware'
import { getCatPng } from '../redux/thunkMiddleware/getCatPng'

const NavBar = () => {

    const { category } = useSelector(state => state)

    const dispatch = useDispatch()

    const handleClick = (e) => {
        dispatch(getCatPng(e))
        console.log("e&id ", e);
    }

    useEffect(() => {
        dispatch(getCatMiddleware())
    }, [])
    return (
        <Navbar>
            <Container>
                <Navbar.Brand >Cat APP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Documents</Nav.Link>
                        <NavDropdown title="Category" id="basic-nav-dropdown">
                            {category.map((e) =>
                                <NavDropdown.Item onClick={() => handleClick(e.id)} key={e.id} >{e.name}</NavDropdown.Item>
                            )}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar