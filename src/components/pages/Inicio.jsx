import { Container } from 'react-bootstrap'
import banner from '../../assets/banner.png'
import NuestrosProductos from '../NuestrosProductos'

const Inicio = () => {
    return(
        <Container className="flex-grow-1">
            <div className='row'>
                <img src={banner} alt="" className='col-sm-12 col-lg-12 object-fit-cover my-3' height={300}/>
            </div>
            <NuestrosProductos></NuestrosProductos>
        </Container>
    )
}

export default Inicio