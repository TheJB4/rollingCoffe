
import { Navbar,Nav,Container,NavDropdown } from 'react-bootstrap';
import Logo from '../../assets/Coffee_Logo.png'

const Menu = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={Logo} alt=""  className='img-fluid' width={150}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Administrador</Nav.Link>
                        <Nav.Link href="#link">Registro</Nav.Link>
                        <Nav.Link href="#link">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu