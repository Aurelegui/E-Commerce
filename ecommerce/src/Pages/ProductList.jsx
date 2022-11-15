import { useLocation } from 'react-router-dom';
import { useState, useCallback } from 'react';
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
    const location = useLocation();
    const category = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = useCallback((e) => {
        const value = e.target.value;
        setFilters(prev => ({
            ...prev,
            [e.target.name]: value
        }))
    }, [setFilters])

    const handleSort = useCallback((e) => {
        const valueSort = e.target.value;
        setSort({
            [e.target.name]: valueSort
        })
    }, [setSort])
    console.log(sort);
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>MEN SHOES</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products</FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option >Color</Option>
                        <Option >white</Option>
                        <Option >black</Option>
                        <Option >red</Option>
                        <Option >blue</Option>
                        <Option >yellow</Option>
                        <Option >green</Option>
                        <Option >pink</Option>
                        <Option >orange</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option >Size</Option>
                        <Option >36</Option>
                        <Option >37</Option>
                        <Option >38</Option>
                        <Option >39</Option>
                        <Option >40</Option>
                        <Option >41</Option>
                        <Option >42</Option>
                        <Option >43</Option>
                        <Option >44</Option>
                        <Option >45</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products</FilterText>
                    <Select name="filter" onChange={handleSort}>
                        <Option value='newest'>Newest</Option>
                        <Option value='asc'>Price (asc)</Option>
                        <Option value='desc'>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products category={category} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList