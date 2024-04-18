import React from 'react';
import { LiaDollarSignSolid } from 'react-icons/lia';


const Btcbox = () => {
  const data = [
    { icon1: <LiaDollarSignSolid />, backgroundColor: '#1A9AF6',color:"#ffffff", text: 'Buy BTC' },
    { icon1: <LiaDollarSignSolid />, backgroundColor: '#FD458F',color:"#ffffff", text: 'Sell BTC' },
  ];

  return (
    <div className="icon-container">
      {data.map((item, index) => (
        <div key={index} className="icon-box" >
          <div className="icon-circle" style={{ backgroundColor: item.backgroundColor ,color:item.color}}>
            {item.icon1}
          </div>
          <div className="btc-text">{item.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Btcbox;
