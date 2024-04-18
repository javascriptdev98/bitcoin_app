import React, { useState } from 'react'
// import { HiChevronLeft, HiDotsVertical, RiEditBoxLine,RiInformationLine, CiCreditCard1, RiShare2Line,  } from "react-icons";
import { HiChevronLeft } from 'react-icons/hi';
import { HiDotsVertical } from 'react-icons/hi';
import { CiCreditCard1 } from 'react-icons/ci';
import {  RiEditBoxLine } from 'react-icons/ri';
import { RiShare2Line } from 'react-icons/ri';
import { MdOutlineRemoveCircleOutline } from "react-icons/md";

const Header = () => {

  const [showDropDown, setShowDropDown] = useState(false);

  const dropDownMenus = [
    { label: 'Edit', icon: RiEditBoxLine },
    { label: 'Courier info', icon: CiCreditCard1 },
    { label: 'Share', icon: RiShare2Line },
    { label: 'Remove', icon: MdOutlineRemoveCircleOutline }
  ];

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  }

  return (
    <div className='header-container'>
      <HiChevronLeft className='icon' />
      <h2>Bitcoin Wallet</h2>

      <HiDotsVertical className='icon' onClick={toggleDropDown} />


      <ul>
        {showDropDown && (
          <div className='dropdown-menu'>
            {dropDownMenus.map((item, index) => (
              <div key={index} className='dropdown-item'>

                <span>{item.label}</span>
                {item.icon && <item.icon className='dropdown-icon' />}
              </div>
            ))}
          </div>
        )}
      </ul>



    </div>

  );
};

export default Header;