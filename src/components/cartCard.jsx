import { useEffect, useState } from "react";
import styled from "styled-components";

const CartCard = ({ cartItem, onDelete, addCount, minusCount }) => {
  // console.log(cartItem);
  const { id, name, price, count } = cartItem;
  // const [count, setCount] = useState(1);

  // useEffect(() => {
  //   console.log(price * count);
  // }, [count]);
  return (
    <>
      <Cart>
        <Name>{name}</Name>
        <Price>{price} 원</Price>
        <Counter>
          <CartButton onClick={() => addCount(id)}>+</CartButton>
          <Count>{count}</Count>
          <CartButton onClick={() => minusCount(id)}>-</CartButton>
        </Counter>
        <Delete onClick={() => onDelete(id)}>X</Delete>
      </Cart>
    </>
  );
};

export default CartCard;

const Cart = styled.li`
  height: 30px;
  width: 330px;
  border: 1px solid gray;
  border-radius: 5px;
  margin-bottom: 10px;
  list-style-type: none;
  display: flex;
  padding-left: 15px;
  align-items: center;
`;
const Counter = styled.div`
  width: 18%;
`;
const Name = styled.span`
  width: 45%;
`;
const Price = styled.span`
  width: 23%;
  margin-right: 5px;
`;
const CartButton = styled.button`
  background-color: transparent;
  border: 1px solid gray;
  border-radius: 3px;
  font-size: 15px;
`;
const Delete = styled.button`
  background-color: #fd8989;
  border: 1px solid gray;
  color: white;
  border-radius: 3px;
  margin-left: 7px;
  height: 23px;
  width: 25px;
`;
const Count = styled.span`
  margin: auto 3px auto 3px;
`;
