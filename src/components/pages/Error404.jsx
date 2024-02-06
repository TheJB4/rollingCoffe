import { Container } from "react-bootstrap"
import errorImage from '../../assets/error404.png'

const Error404 = () => {
    return(
        <Container className="h-100 w-100 d-flex flex-column justify-content-start align-items-center">
            <img src={errorImage} alt="" />
            <button>Volver al inicio</button>
        </Container>
    )
}

export default Error404