import React from 'react'

const Navbar = ({ filterItem, uniqueData }) => {
    return (
        <>
            <nav className="navbar ">
                <div className="btn-group">
                    {
                        uniqueData.map((curElem) => {
                            return (
                                <button
                                    className=' btn-group__item'
                                    onClick={() => filterItem(curElem)}>{curElem}
                                </button>
                            )
                        })
                    }
                    {/* <button className=' btn-group__item' onClick={() => filterItem('lunch')}>lunch</button>
                    <button className=' btn-group__item' onClick={() => filterItem('evening')}>evening</button>
                    <button className=' btn-group__item' onClick={() => filterItem('dinner')}>dinner</button>
                    <button className=' btn-group__item' >all</button> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar;
