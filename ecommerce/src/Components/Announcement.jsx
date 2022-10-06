import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: teal;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    padding: 5px;
`
const Announcement = () => {
    return (
        <Container>
            Free shipping on orders over $50
        </Container>
    )
}

export default Announcement