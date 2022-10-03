import styled from 'styled-components';

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
    width: 20%;
    padding: 20px;
    background-color: white;
    border: 1px solid teal;

`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    text-align: center;
    margin-bottom: 5px;
`

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>LOGIN</Button>
                    <Link>FORGOT PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login