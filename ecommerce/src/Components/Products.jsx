import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import axios from 'axios';


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({ category, filters, sort }) => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get(category
                    ? `http://localhost:5000/api/products?category=${category}`
                    : "http://localhost:5000/api/products");
                setProducts(response.data);
            } catch (err) {
                console.log(err)
            }
        }
        getProducts();
    }, [category]);

    useEffect(() => {
        category &&
            setFilteredProducts(
                products.filter(item =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            );
    }, [products, category, filters]);

    useEffect(() => {
        if (sort?.filter === "newest") {
            setFilteredProducts(prev =>
                [...prev].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
            );
        } else if (sort?.filter === "asc") {
            setFilteredProducts(prev =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else if (sort?.filter === "desc") {
            setFilteredProducts(prev =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort])
    return (
        <Container>
            {filteredProducts.map(item => (
                <Product key={item._id} item={item} />
            ))}
        </Container>
    )
}

export default Products