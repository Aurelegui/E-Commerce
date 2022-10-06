import styled from 'styled-components';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Newsletter from '../Components/Newsletter';
import Products from '../Components/Products';
import { mobile } from '../responsive';

const Container = styled.div`

`

const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

`

const Filter = styled.div`
    margin: 20px;
    ${mobile({
    margin: "0px 20px",
    display: "flex",
    flexDirection: "column"
})}
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({
    marginRight: "20px"
})}
`

const Select = styled.select`
    font-size: 16px;
    padding: 10px;
    margin-right: 20px;
    ${mobile({
    margin: "10px 0px"
})}
`

const Option = styled.option`
    font-size: 16px;
    padding: 10px;
    display: inline-block;
`


const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>MEN SHOES</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products</FilterText>
                    <Select>
                        <Option disabled selected >Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled selected >Size</Option>
                        <Option>38</Option>
                        <Option>39</Option>
                        <Option>40</Option>
                        <Option>41</Option>
                        <Option>42</Option>
                        <Option>43</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products</FilterText>
                    <Select>
                        <Option disabled selected >Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList