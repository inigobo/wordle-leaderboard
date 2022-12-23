import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../contexts/GlobalContext';

const HeaderNav = () => {
    const { globalContext } = useGlobalContext();
    useEffect(() => {
        console.log(globalContext,"nav");
    }, [globalContext])
    
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Wordle Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="link">Link</Nav.Link>
                        <NavDropdown title="Leaderboard" id="basic-nav-dropdown">
                            <NavDropdown.Item >
                                <Link to="/leaderboard">
                                Daily
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Weekly</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">All-time</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="/profile">{globalContext.username}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderNav;