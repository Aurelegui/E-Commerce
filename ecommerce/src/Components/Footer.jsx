import styled from 'styled-components';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

const Container = styled.div`
   display: flex;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const Logo = styled.h1`

`

const Description = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 45%;
    height: auto;
`



const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>BAL.</Logo>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. *
                    Quas accusamus natus quis magni doloremque, ut aspernatur neque totam,
                    sunt iusto deleniti molestiae illum et ab minus officia similique animi delectus.
                </Description>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <FacebookOutlinedIcon />
                    </SocialIcon>
                    <SocialIcon color="0072B1">
                        <LinkedInIcon />
                    </SocialIcon>
                    <SocialIcon color="171515">
                        <GitHubIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Shoes</ListItem>
                    <ListItem>Woman Shoes</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms & Conditions</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <LocationOnOutlinedIcon style={{ marginRight: "10px" }} /> Bruxelles
                </ContactItem>
                <ContactItem>
                    <LocalPhoneOutlinedIcon style={{ marginRight: "10px" }} /> +32477987802
                </ContactItem>
                <ContactItem>
                    <EmailOutlinedIcon style={{ marginRight: "10px" }} /> aurele.guitard@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer