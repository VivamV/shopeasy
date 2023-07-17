import React from "react";
import './checkout.css'
import Subtotal from "./subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./checkoutproduct";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const emptybasket = () => {
    // remove all items from the basket
    dispatch({
        type: 'EMPTY_BASKET',
        
    })
}

 
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="hjjttps://images-eu.ssl-images-amazon.com/images/G/31/img19/MAI/Sweepstakes/Nov/MEDH_SWM_1500x200.jpg"
          alt=""
        />

        <div>
          <h3>Hello,{user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket contains {basket?.length} items:</h2>
        
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

        </div>
        
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;