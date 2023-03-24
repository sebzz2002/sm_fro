import React from 'react';
import './QrScanner.css';

const ProductTable = ({ products, removeQtyByOne }) => {
    const removeItem = (e) => {
        removeQtyByOne(e.target.id)
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Rate</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr key={product._id}>
                        <td>{product.productName}</td>
                        <td>{product.productPrice}</td>
                        <td>
                            <div className="container__btn">
                                <div >{product.qty}</div>
                                <button className="btn btn-primary" id={product._id} onClick={removeItem}>-</button>
                            </div>


                        </td>
                        <td>{product.productPrice * product.qty}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProductTable;
