import React from 'react'

const MenuCard = ({ menuData }) => {
  return (
    <>
    <div className="main-card--container">
                {
                    menuData.map((curData) => {
                        const {id, name,category, description, image, price} = curData;
                        return(
                        <div className="card-container">
                            <div className="card">
                                <div className="card-body">
                                    <span className=" card-number card-circle subtle">{id} </span>
                                    <span className=" card-author subtle">{category} : {price} </span>
                                    <h2 className="card-title ">{name}</h2>
                                    <span className=" card-description subtle">{description} </span>
                                    <div className="card-read subtle">Read</div>
                                    <img src={image} alt="image" className='card-media' />
                                    <span className="card-tag subtle">Order now</span>
                                </div>
                            </div>
                        </div>
                     )})
                }
            </div></>
  )
}

export default MenuCard
