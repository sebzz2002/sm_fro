import React, { useEffect, useState } from 'react'
import ProductTable from './ProductTable'
import QrScanner from './QrScanner'

import './QrScanner.css';


const Billing = () => {
    const [scannedData, setScannedData] = useState('')
    const [productArray, setProductArray] = useState([])

    useEffect(() => {
        if (scannedData !== "") {
            fetch('http://localhost:5000/product/' + scannedData)
                .then(response => response.json())
                .then(product => {

                    product.qty = 1
                    if (product.shouldWeigh === true) {
                        product.qty = prompt("Enter the weight in kgs")
                        // navigator.bluetooth.requestDevice({ filters: [{ services: ['serial_port'] }] })
                        //     .then(device => device.gatt.connect())
                        //     .then(server => server.getPrimaryService('serial_port'))
                        //     .then(service => service.getCharacteristic('write'))
                        //     .then(characteristic => {
                        //         characteristic.writeValue('Hello from the website!');
                        //     });


                    }
                    productArray.forEach((item, index) => {
                        if (item._id === product._id && product.shouldWeigh === false) {
                            product.qty = productArray[index].qty + 1
                            productArray.splice(index, 1)
                        } else if (item._id === product._id && product.shouldWeigh === true) {
                            product.qty = parseFloat(productArray[index].qty) + parseFloat(product.qty)
                            productArray.splice(index, 1)
                        }
                    })
                    let newArray = [...productArray]
                    console.log(product)
                    newArray.push(product)
                    setProductArray(newArray)
                })
                .catch(error => {
                    console.error('Error fetching product details:', error);
                });
        }
    }, [scannedData])

    useEffect(() => {
        if (productArray.length !== 0) {
            console.log(productArray)
        }
    }, [productArray])

    const removeQtyByOne = (id) => {
        productArray.forEach((item, index) => {
            if (item._id === id) {
                if (item.qty > 1) {
                    item.qty = item.qty - 1
                } else {
                    productArray.splice(index, 1)
                }
            }
        })
        setProductArray([...productArray])
    }


    return (
        <div>
            <QrScanner scannedData={scannedData} setScannedData={setScannedData} />
            {console.log(productArray)}
            {productArray.length !== 0 && <ProductTable products={productArray} removeQtyByOne={removeQtyByOne} />}

        </div>
    )
}

export default Billing


