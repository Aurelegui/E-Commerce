import styled from 'styled-components';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Newsletter from '../Components/Newsletter';

const Container = styled.div`

`

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Newsletter />
            <Footer />

        </Container>
    )
}

export default Product