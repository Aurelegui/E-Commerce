import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { useEffect, useState } from 'react';
import axios from 'axios';
const KEY = 'pk_test_51M0RZkIrWLfoKmJexegguaDmYQo22HmZRDn9e9VodUh7uv86s2140tbFEKhzfdn5z2hjp2W6IvVda7NDR2CGZLeH00n674Kcw0';

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null);

    const onToken = (token) => {
        setStripeToken(token);
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post("http://localhost:5000/api/checkout/payement", {
                    tokenId: stripeToken.id,
                    amount: 2000,
                });
                console.log(res.data);
            } catch (err) {
                console.log(err)
            }
        };
        stripeToken && makeRequest();
    }, [stripeToken]);

    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <StripeCheckout
                name='E-commerce'
                // image='../public/logo192.png'
                billingAddress
                shippingAddress
                description='Your total is $20'
                amount={2000}
                token={onToken}
                stripeKey={KEY}
            >
                <button
                    style={{
                        border: 'none',
                        width: 120,
                        borderRadius: 5,
                        padding: '20px',
                        backgroundColor: 'black',
                        color: 'white',
                        fontWeight: '600',
                        cursor: 'pointer'
                    }}
                >
                    Pay Now
                </button>
            </StripeCheckout>

        </div>
    )
}

export default Pay