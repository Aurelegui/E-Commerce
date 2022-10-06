import styled from 'styled-components';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Newsletter from '../Components/Newsletter';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { mobile } from '../responsive';


const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({
    padding: "5px",
    flexDirection: "column"
})}
`

const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Image = styled.img`
    width: 100%;
    max-height: 90vh;
    object-fit: cover;
    ${mobile({
    height: "30vh",
})}
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({
    padding: "10px",
})}
`

const Title = styled.h1`
font-weight: 200;

`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({
    width: "100%",
})}
`

const Filter = styled.div`
    display: flex;
    align-items: center;

`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${props => props.color};
   margin: 0px 5px;
   cursor: pointer;
`

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`

const FilterSizeOption = styled.option`
    
`

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({
    width: "100%",
})}
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background-color: #f8f4f4;
    }
`

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://static.nike.com/a/images/t_default/9cffba44-ab82-4920-af87-8c3478ee3659/kd15-basketball-shoes-10P3rj.png" />
                </ImageContainer>
                <InfoContainer>
                    <Title>Kd 15</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Minima iste maxime modi necessitatibus quisquam accusamus!
                        Molestias autem laboriosam provident praesentium numquam facere, vero alias nulla
                        explicabo unde officiis delectus esse?
                    </Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>39</FilterSizeOption>
                                <FilterSizeOption>40</FilterSizeOption>
                                <FilterSizeOption>41</FilterSizeOption>
                                <FilterSizeOption>42</FilterSizeOption>
                                <FilterSizeOption>43</FilterSizeOption>
                                <FilterSizeOption>44</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <RemoveOutlinedIcon />
                            <Amount>1</Amount>
                            <AddOutlinedIcon />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />

        </Container>
    )
}

export default Product