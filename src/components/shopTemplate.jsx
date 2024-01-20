import styled from "styled-components";
import ProductTemplate from "./productTemplate";
import CartList from "./cartList";
import { useState } from "react";

const ShopTemplate = () => {
  const [cartItem, setCartItem] = useState([
    { id: 0, name: "기본상품", price: 0 },
    // { id: 6, name: "맥주", price: 3600 },
  ]);
  const addCart = (products) => {
    const newCartList = [
      {
        id: products.id,
        name: products.name,
        price: products.price,
      },
    ];
    
    setCartItem(cartItem.concat(newCartList));
  };
  // console.log(cartItem);
  const onDelete = (id) => {
    const newCartList = cartItem.filter((item) => item.id !== id);
    setCartItem(newCartList);
    // console.log(id);
  };
  return (
    <Container>
      <ProductTemplate addCart={addCart} />
      <CartList cartItem={cartItem} onDelete={onDelete} />
    </Container>
  );
};
export default ShopTemplate;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
