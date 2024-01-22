import styled from "styled-components";
import CartCard from "./cartCard";

const CartList = ({ cartItem, onDelete, addCount, minusCount }) => {
  // console.log(cartItem);
  // const TotalPrice = () => {

  // }
  return (
    <CartContainer>
      <Cart>쇼핑 카트</Cart>
      <ul>
        {cartItem.map((item) => (
          <CartCard
            cartItem={item}
            key={item.id}
            onDelete={onDelete}
            addCount={addCount}
            minusCount={minusCount}
          />
        ))}
      </ul>
    </CartContainer>
  );
};

export default CartList;

const CartContainer = styled.div``;
const Cart = styled.div`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`;
