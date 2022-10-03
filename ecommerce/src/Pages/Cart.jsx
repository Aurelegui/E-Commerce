import styled from 'styled-components';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Container = styled.div`
    
`
const Wrapper = styled.div`
    
`
const Title = styled.h1`
    
`

const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart