import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useGlobalContext } from '../../contexts/GlobalContext';
import LoginCard from '../LoginCard/LoginCard';
import { LinkContainer } from 'react-router-bootstrap';
import AddBoardModal from '../AddBoardModal/AddBoardModal';

const HeaderNav = () => {
    const { globalContext } = useGlobalContext();
    // useEffect(() => {
    //     console.log(globalContext, "nav");
    // }, [globalContext])


    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Wordle Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item>
                            <LinkContainer to="/leaderboard">
                                <Nav.Link>Leaderboard</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <AddBoardModal />
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>

                <Navbar.Collapse className="justify-content-end">
                    {globalContext.isLoggedIn && <LoginCard />}
                    {!globalContext.isLoggedIn && <LinkContainer to="/login"><Nav.Link >Login</Nav.Link></LinkContainer>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderNav;

