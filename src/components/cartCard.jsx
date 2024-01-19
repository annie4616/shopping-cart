import { useState } from "react";
import styled from "styled-components";

const CartCard = ({ cartItem, onDelete }) => {
  console.log(cartItem);
  const { id, name, price } = cartItem;
  const [count, setCount] = useState(1);
  const addCount = () => {
    setCount(count + 1);
  };
  const minusCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <li>
        <span>{name}</span>
        <span>{price} 원</span>
        <button onClick={addCount}>+</button>
        <span>{count}</span>
        <button onClick={minusCount}>-</button>
        <button onClick={() => onDelete(id)}>X</button>
      </li>
    </>
  );
};

export default CartCard;
