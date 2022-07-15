import React from "react";
import { useStateValue } from "../../StateProvider";
import "./checkoutProduct.css";

const CheckoutProduct = ({ id, pic, title, price, rating, hideButton }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // removing the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={pic} alt="product image" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title"> {title} </p>
        <p className="checkoutProduct__price">
          {" "}
          <small>₹ </small> <strong>{price}</strong>{" "}
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>🌟</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove form Basket</button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
