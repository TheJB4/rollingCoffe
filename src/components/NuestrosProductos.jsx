import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function NuestrosProductos() {
    return (
        <Container fluid>
            <p className='h1'>Nuestros Productos</p>
            <Row className='justify-content-around'>
                <Col xs={12} md={2} lg={4} className=''>
                    <Card className="m-2" style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/15737361/pexels-photo-15737361/free-photo-of-plato-cuchara-beber-vaso.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{ height: '200px', objectFit: 'cover' }} />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>Café Americano</Card.Title>
                            <Card.Text >
                                Descripción: Una taza de cafe suave y aromático
                            </Card.Text>
                            <Card.Text className='fw-bold'>
                                Precio: $250
                            </Card.Text>
                            <div className="mt-auto pt-2 border-top d-flex justify-content-end">
                                <Button className='bg-green'>Ver más</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={2} lg={4}  className=''>
                    <Card className="m-2" style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/14077270/pexels-photo-14077270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{ height: '200px', objectFit: 'cover' }} />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>Café Americano</Card.Title>
                            <Card.Text>
                                Descripción: Una taza de cafe suave y aromático
                            </Card.Text>
                            <Card.Text className='fw-bold'>
                                Precio: $250
                            </Card.Text>
                            <div className="mt-auto pt-2 border-top d-flex justify-content-end">
                                <Button className='bg-green'>Ver más</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}  className=''>
                    <Card className="m-2">
                        <Card.Img variant="top" src="https://images.pexels.com/photos/14077270/pexels-photo-14077270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{ height: '200px', objectFit: 'cover' }} />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>Café Americano</Card.Title>
                            <Card.Text>
                                Descripción: Una taza de cafe suave y aromático
                            </Card.Text>
                            <Card.Text className='fw-bold'>
                                Precio: $250
                            </Card.Text>
                            <div className="mt-auto pt-2 border-top d-flex justify-content-end">
                                <Button className='bg-green'>Ver más</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}