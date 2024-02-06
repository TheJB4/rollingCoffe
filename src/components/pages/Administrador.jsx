import { Container, Table } from "react-bootstrap"

const Administrador = () => {
    return (
        <Container className="flex-grow-1 d-flex flex-column justify-content-center">
                <div className="w-100 d-flex justify-content-between">
                    <p className="h1">Productos Disponibles</p>
                    <button className="btn btn-primary">Añadir</button>
                </div>
                <Table responsive="sm" className="table table-bordered table-secondary">
                    <thead>
                        <tr>
                            <th>Cód</th>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>URL de la Imagen</th>
                            <th>Categoría</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="fw-bold">001</td>
                            <td className="fw-bold">Producto 1</td>
                            <td className="fw-bold">$10.00</td>
                            <td className="fw-bold"><img src="" alt="" /></td>
                            <td className="fw-bold">Reposteria</td>
                            <td>
                                <button className="btn btn-primary">Editar</button>
                                <button className="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="fw-bold">002</td>
                            <td className="fw-bold">Producto 2</td>
                            <td className="fw-bold">$20.00</td>
                            <td ><img src="" alt="" /></td>
                            <td className="fw-bold">Reposteria</td>
                            <td>
                                <button className="btn btn-primary">Editar</button>
                                <button className="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="fw-bold">003</td>
                            <td className="fw-bold">Producto 3</td>
                            <td className="fw-bold">$30.00</td>
                            <td className="fw-bold"><img src="" alt="" /></td>
                            <td className="fw-bold">Bebida Caliente</td>
                            <td>
                                <button className="btn btn-primary">Editar</button>
                                <button className="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
        </Container>
    )
}

export default Administrador