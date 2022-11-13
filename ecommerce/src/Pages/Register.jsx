import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: 
    linear-gradient(
        rgba(255,255,255,0.5), 
        rgba(255,255,255,0.5)), 
        url("https://images.squarespace-cdn.com/content/v1/5f977a2c2c9e1952d27a9617/1610554482588-DPUIU1HK2NDNLMGBOJ6A/Michael_Allen_Nesmith_Nike_Overlay_v7.0.png") center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    border: 1px solid teal;
    ${mobile({
    width: "75%",
})}

`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin:20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    text-align: center;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mobile({
    width: "100%",
})}
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register