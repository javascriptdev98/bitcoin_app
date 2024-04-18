import React, { useState } from 'react';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';

const StockItem = () => {
    const [showExtraInfo, setShowExtraInfo] = useState(false);

    const toggleExtraInfo = () => {
        setShowExtraInfo(!showExtraInfo);
    };

    return (
        <div className="stock-item">
            <div className="header" >
                <div className="info1">
                    <CurrencyBitcoinIcon className='info1-icon'/>
                    <div className="name">Bitcoin</div>
                    <div className="text">BTC</div>
                </div>
                <div className="info2">
                    <h3>3.529020 BTC</h3>
                </div>
                <div className='info3'>
                    <p>$19.153 USD</p>
                    <button>-2.32%</button>
                </div>


            </div>
            <div className="arrow" onClick={toggleExtraInfo}>
                <ExpandMoreTwoToneIcon className={showExtraInfo ? 'expanded' : ''} />
            </div>
            {showExtraInfo &&
             <div className="extra-info">
                    <button className="buy-button">Buy</button>
                    <button className="sell-button">Sell</button>
            </div>}

        </div>
    );
};

export default StockItem;
