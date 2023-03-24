import React, { useRef, useState } from 'react';
import { BsQrCodeScan } from 'react-icons/bs';

import QrReader from 'react-qr-scanner'

import './QrScanner.css';

function QrScanner({ scannedData, setScannedData }) {
    const [delay, setDelay] = useState(100);
    const [camera, setCamera] = useState(false);

    const handleScan = async (scanData) => {
        if (scanData && scanData !== "") {
            setScannedData(scanData?.text);
            setCamera(false);
        }
    };
    const handleError = (err) => {
        console.error(err);
    };
    return (
        <div>
            <div className="wrapper">
                <div className="preview">
                    {camera ? <QrReader
                        delay={delay}
                        onError={handleError}
                        onScan={handleScan}
                        style={{ width: '100%', height: '100%' }}
                    /> : <BsQrCodeScan style={{
                        fontSize: "50px",
                        width: '100%', height: '100%',
                        color: "black",
                        zIndex: "1",

                    }}
                        onClick={() => {
                            setCamera(true)
                            setScannedData("")
                        }}
                    />}

                </div>
            </div>
        </div>
    );
}

export default QrScanner;
