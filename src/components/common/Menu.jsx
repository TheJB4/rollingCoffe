
import { Navbar,Nav,Container,NavDropdown } from 'react-bootstrap';
import Logo from '../../assets/Coffee_Logo.png'
import { Link,NavLink, Outlet } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={Logo} alt=""  className='img-fluid' width={150}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink end to="/" className="mx-1">Inicio</NavLink>
                        <NavLink end to="/administrador" className="mx-1">Administrador</NavLink>
                        <NavLink end to="/registro" className="mx-1">Registro</NavLink>
                        <NavLink end to="/login" className="mx-1">Login</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Outlet/>
        </div>
    )
}

export default Menu