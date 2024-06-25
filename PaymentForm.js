import React, { useState } from 'react';
import { createCustomer, createOrder, createToken } from './conektaService';

const PaymentForm = () => {
    const [customerData, setCustomerData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const [cardData, setCardData] = useState({
        number: '',
        name: '',
        exp_month: '',
        exp_year: '',
        cvc: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomerData({ ...customerData, [name]: value });
    };

    const handleCardChange = (e) => {
        const { name, value } = e.target;
        setCardData({ ...cardData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log("Public Key:", process.env.REACT_APP_CONEKTA_PUBLIC_KEY);
            console.log("Private Key:", process.env.REACT_APP_CONEKTA_PRIVATE_KEY);

            // Create token
            const tokenResponse = await createToken(cardData);
            const { id: tokenId } = tokenResponse;

            // Create customer
            const customer = await createCustomer({
                name: customerData.name,
                email: customerData.email,
                phone: customerData.phone
            });

            // Create order
            const order = await createOrder({
                currency: 'MXN',
                customer_info: {
                    customer_id: customer.id
                },
                line_items: [
                    {
                        name: 'Test Item',
                        unit_price: 1000,
                        quantity: 1
                    }
                ],
                charges: [
                    {
                        payment_method: {
                            type: 'card',
                            token_id: tokenId
                        }
                    }
                ]
            });

            console.log('Customer created:', customer);
            console.log('Order created:', order);
        } catch (error) {
            console.error('Error creating customer or order:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={customerData.name}
                onChange={handleInputChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={customerData.email}
                onChange={handleInputChange}
            />
            <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={customerData.phone}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="number"
                placeholder="Card Number"
                value={cardData.number}
                onChange={handleCardChange}
            />
            <input
                type="text"
                name="name"
                placeholder="Name on Card"
                value={cardData.name}
                onChange={handleCardChange}
            />
            <input
                type="text"
                name="exp_month"
                placeholder="Expiration Month (MM)"
                value={cardData.exp_month}
                onChange={handleCardChange}
            />
            <input
                type="text"
                name="exp_year"
                placeholder="Expiration Year (YY)"
                value={cardData.exp_year}
                onChange={handleCardChange}
            />
            <input
                type="text"
                name="cvc"
                placeholder="CVC"
                value={cardData.cvc}
                onChange={handleCardChange}
            />
            <button type="submit">Pay</button>
        </form>
    );
};

export default PaymentForm;
