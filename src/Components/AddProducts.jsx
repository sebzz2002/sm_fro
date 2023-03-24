import React, { useState } from 'react';
import './Product.css';

function AddProducts() {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [stockAvailable, setStockAvailable] = useState('');
    const [shouldWeigh, setShouldWeigh] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productName, productPrice, stockAvailable, shouldWeigh }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            console.log('Error creating product');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="product-form">
            <label>
                Product Name:
                <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
            </label>
            <label>
                Product Price:
                <input type="text" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
            </label>
            <label>
                Stock Available:
                <input type="text" value={stockAvailable} onChange={(e) => setStockAvailable(e.target.value)} />
            </label>
            <label>
                Should Weigh:
                <input type="text" value={shouldWeigh} onChange={(e) => setShouldWeigh(e.target.value)} />
            </label>
            <button type="submit">Create Product</button>
        </form>
    );
}

export default AddProducts;
