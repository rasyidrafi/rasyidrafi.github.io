import { Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import ProfileImage from "../assets/img/rasyid_rafi_transparent.png"

const Home = () => {
    return (
        <Row className='h-100'>
            <Col md={6} xs={12} className="text-center text-main flex-column justify-content-center align-items-center d-flex">
                <span class="fs-3 text-light fw-bold mb-1">
                    Muhammad Rasyid Rafi'i
                </span>
                <span class="fs-6 text-light fst-italic mb-2">~ {new Date().getFullYear() - 2004} yo Software Engineer Based on Indonesia</span>
                <Link to="/profile" className="mt-1 btn btn-outline-warning">Profile</Link>
            </Col>
            <Col className='img-col' md={6} xs={0}></Col>
            <img src={ProfileImage} alt="profile" className='img-header' />
        </Row>
    )
}

export default Home