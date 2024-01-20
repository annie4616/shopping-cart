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
      <Cart>
        <Name>{name}</Name>
        <Price>{price} 원</Price>
        <CartButton onClick={addCount}>+</CartButton>
        <Count>{count}</Count>
        <CartButton onClick={minusCount}>-</CartButton>
        <Delete onClick={() => onDelete(id)}>X</Delete>
      </Cart>
    </>
  );
};

export default CartCard;

const Cart = styled.li`
  height: 30px;
  width: 300px;
  border: 1px solid gray;
  border-radius: 5px;
  margin-bottom: 10px;
  list-style-type: none;
  display: flex;
  padding-left: 15px;
  align-items: center;
`;
const Name = styled.span`
  width: 45%;
`;
const Price = styled.span`
  width: 20%;
  margin-right: 5px;
`;
const CartButton = styled.button`
  background-color: transparent;
  border: 1px solid gray;
  border-radius: 3px;
`;
const Delete = styled.button`
  background-color: #fd8989;
  border: 1px solid gray;
  color: white;
  border-radius: 3px;
  margin-left: 7px;
  height: 23px;
  width: 30px;
`;
const Count = styled.span`
  margin: auto 3px auto 3px;
`;
