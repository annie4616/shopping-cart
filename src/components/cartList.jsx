import styled from "styled-components";
import CartCard from "./cartCard";

const CartList = ({ cartItem, onDelete }) => {
  console.log(cartItem);
  // const TotalPrice = () => {

  // }
  return (
    <CartContainer>
      <Cart>쇼핑 카트</Cart>
      <ul>
        {cartItem.map((item) => (
          <CartCard cartItem={item} key={item.id} onDelete={onDelete} />
        ))}
      </ul>
      <Total>총 가격: {} 원</Total>
    </CartContainer>
  );
};

export default CartList;

const CartContainer = styled.div`
  background-color: #dbdbdb;
  width: 35%;
  height: 100vh;
`;
const Cart = styled.div`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`;

const Total = styled.div`
  font-size: 17px;
  font-weight: 400;
  margin-left: 40px;
`;
