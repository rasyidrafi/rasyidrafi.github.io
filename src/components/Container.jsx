import { Container as BsContainer, Card, CardBody } from 'reactstrap'
import cardBg from "../assets/img/circle-bg.png"

const Container = ({ children }) => {
    return (
        <BsContainer className='py-4 main' >
            <Card className='h-100 border-2 border-dark' style={{ background: "transparent" }}>
                <CardBody className='bg-dark h-100 py-1 card-main' style={{ backgroundImage: `url(${cardBg})` }}>
                    {children}
                </CardBody>
                <CardBody className='copyright p-1 text-center'>
                    <span>Copyright {new Date().getFullYear()} - Rasyid Rafi</span>
                </CardBody>
            </Card>
        </BsContainer>
    )
}

export default Container