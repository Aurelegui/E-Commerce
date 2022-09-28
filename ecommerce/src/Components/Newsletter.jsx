import styled from 'styled-components';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    
`
const Description = styled.div`
    
`
const InputContainer = styled.div`
    
`
const Input = styled.input`
    
`
const Button = styled.button`
    
`

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>
                Get timely updates from your favorite products
            </Description>
            <InputContainer>
                <Input placeholder='Your email' />
                <Button>
                    <SendOutlinedIcon />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter