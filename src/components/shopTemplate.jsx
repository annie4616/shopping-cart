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

    if (cartItem.every((cartItem) => cartItem.id !== products.id)) {
      setCartItem(cartItem.concat(newCartList));
    } else {
      alert("이미 추가된 상품입니다 !");
    }
  };
  // console.log(cartItem);
  const onDelete = (id) => {
    const newCartList = cartItem.filter((item) => item.id !== id);
    setCartItem(newCartList);
    // console.log(id);
  };
  // const Totalprice = () => {
  //   return(
  //     <></> )
  // }
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
