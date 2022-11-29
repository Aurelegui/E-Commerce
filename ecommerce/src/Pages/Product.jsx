import { publicRequest } from '../requestMethods';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Newsletter from '../Components/Newsletter';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { mobile, smallScreen, tablet } from '../responsive';
import { cartAdd, cartRemove } from "../redux/cartReducer"

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
    max-height: 70vh;
    object-fit: contain;
    ${mobile({
    objectFit: "cover",
    maxHeight: "55vh",
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
    ${tablet({
    fontSize: "35px"
})}
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${smallScreen({
    width: "100%",
    flexDirection: "column",
    margin: "10px 0px"
})}
`

const Filter = styled.div`
    display: flex;
    align-items: center;
    ${smallScreen({
    padding: "10px 0px"
})}
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
   border: 1px solid black;
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
    ${smallScreen({
    width: "100%",
    justifyContent: "space-between"
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
    const dispatch = useDispatch()
    const cartSize = useSelector(state => state.cart.length)
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data);
            } catch (err) {
                console.log(err)
            }
        }
        getProduct();
    }, [id])

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    }

    console.log(product);

    const handleClick = () => {
        // update cart USING REDUX
        dispatch(cartAdd(
            {
                id: product._id,
                price: product.price
            }
        ))
    }

    const handleRemove = () => {
        // update cart USING REDUX
        dispatch(cartRemove(
            {
                id: product._id,
            }
        ))
    }



    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImageContainer>
                    <Image src={product.img} />
                </ImageContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.desc}</Desc>
                    <Price>$ {product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>{product.color}</FilterTitle>
                            {product.color?.map((c) => {
                                return <FilterColor color={c} key={c} onChange={() => setColor(c)} />
                            })}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e) => setSize(e.target.value)}>
                                {product.size?.map((s) => {
                                    return <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                })}
                                {/* <FilterSizeOption>39</FilterSizeOption> */}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <RemoveOutlinedIcon style={{ cursor: "pointer" }} onClick={() => handleQuantity("dec")} />
                            <Amount>{quantity}</Amount>
                            <AddOutlinedIcon style={{ cursor: "pointer" }} onClick={() => handleQuantity("inc")} />
                        </AmountContainer>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                        <Button onClick={handleRemove}>REMOVE</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />

        </Container>
    )
}

export default Product