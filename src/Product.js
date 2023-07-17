import React from "react";
import "./product.css";
import { useState } from "react";
import { useStateValue } from "./StateProvider";
import PropTypes from 'prop-types';
function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className='product'>
      <div className='p_info'> {title}</div>
      <h3 className='p_price'>₹{price}</h3>
      <img className='p_image' src={image} alt="no"></img>
      <div className='p_rating'>
        {Array(rating).fill().map((_,i)=>(
            <p>🌟</p>
        ))}
        
      </div>
      <button className='add2cartbutton' onClick={addToBasket}   >Add to cart</button>
    </div>
  )
        }

       
export default Product
