import React, { useState } from 'react';
import './style.css';
import Menu from './menuApi';
import MenuCard from './MenuCard'
import Navbar from './Navbar';

const updatedList = [...new Set(Menu.map((curElm) => {
    return curElm.category;
})), "All"]


const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu)
    const [updateData, setUpdateData] = useState(updatedList)

    const filteredItem = (category) => {
        if (category === "All") {
            return setMenuData(Menu)
        }
        const filteredData = Menu.filter((curData) => {
            return curData.category === category;
        })
        setMenuData(filteredData);
    }
    return (
        <>
            <Navbar filteredItem={filteredItem} updateData={updateData} />
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Resturant;
