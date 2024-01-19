import styled from "styled-components";
import CartCard from "./cartCard";

const CartList = ({ cartItem, onDelete }) => {
  console.log(cartItem);
  return (
    <CartContainer>
      <div>쇼핑카트</div>
      <ul>
        {cartItem.map((item) => (
          <CartCard cartItem={item} key={item.id} onDelete={onDelete} />
        ))}
      </ul>
      <div>총 가격: {}</div>
    </CartContainer>
  );
};

export default CartList;

const CartContainer = styled.div`
  background-color: #dbdbdb;
  width: 35%;
  height: 100vh;
`;
