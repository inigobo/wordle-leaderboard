import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../contexts/GlobalContext';
import LoginCard from '../LoginCard/LoginCard';
import { LinkContainer } from 'react-router-bootstrap';

const HeaderNav = () => {
    const { globalContext } = useGlobalContext();
    useEffect(() => {
        console.log(globalContext, "nav");
    }, [globalContext])

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Wordle Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Leaderboard" id="basic-nav-dropdown">
                            <NavDropdown.Item >
                                <LinkContainer to="/leaderboard">
                                    <Nav.Link>Today</Nav.Link>
                                </LinkContainer>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <LinkContainer to="/login">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    {globalContext.isLoggedIn && <LoginCard />}
                    {!globalContext.isLoggedIn && <LinkContainer to="/login"><Nav.Link >Login</Nav.Link></LinkContainer>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderNav;
