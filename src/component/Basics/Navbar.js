import React from 'react'

function Navbar({ filteredItem, updateData }) {
  return (
    <>
      <div className="navbar">
        <div className="btn-group">
          {
            updateData.map((curElm) => {
              return (
                <button className="btn-group__item"
                  onClick={() => filteredItem(curElm)}> {curElm}</button>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Navbar
