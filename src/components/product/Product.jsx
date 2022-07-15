import React from "react";
import { useStateValue } from "../../StateProvider";
import "./product.css";

const Product = ({ id, title, price, rating, pic }) => {
  const [{ basket }, dispatch] = useStateValue();

  // console.log("This is the basket >>>", basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        pic: pic,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <small>₹ </small>
        <strong>{price}</strong>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <div className="product__pic">
        <img src={pic} alt="product pic" />
      </div>

      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
