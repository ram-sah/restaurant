import React, { useState } from 'react';
import './style.css';
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

// 'new Set' is used to stop repeating data
const uniqueList = [
  ...new Set(Menu.map((e) => {
    return e.category;
  })),
  "All",
];
console.log(uniqueList)

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu)
  const [uniqueData, setUniqueData] = useState(uniqueList)

  const filterItem = (ele) => {
    if(ele === 'All'){
      return setMenuData(Menu)

    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === ele;
    });
    setMenuData(updatedList)
  }

  return (
    <>
      <Navbar filterItem={filterItem} uniqueData={uniqueData} />
      <MenuCard menuData={menuData} />
    </>
  )
}

export default Resturant
