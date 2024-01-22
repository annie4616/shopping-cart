import styled from "styled-components";
import ProductTemplate from "./productTemplate";
import CartList from "./cartList";
import { useState } from "react";

const ShopTemplate = () => {
  const [cartItem, setCartItem] = useState([
    { id: 0, name: "기본상품", price: 0, count: 1 },
    // { id: 6, name: "맥주", price: 3600 },
  ]);
  const addCart = (products) => {
    const newCartList = [
      {
        id: products.id,
        name: products.name,
        price: products.price,
        count: 1,
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
  const addCount = (id) => {
    setCartItem((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };
  const minusCount = (id) => {
    setCartItem((prevList) =>
      prevList.map((item) =>
        item.id === id
          ? item.count > 0
            ? { ...item, count: item.count - 1 }
            : item
          : item
      )
    );
  };
  const calculateTotal = (item) => {
    return item.price * item.count;
  };
  const TotalPrice = () => {
    // console.log(
    //   cartItem.reduce((total, item) => total + calculateTotal(item), 0)
    // );
    return cartItem.reduce((total, item) => total + calculateTotal(item), 0);
  };
  return (
    <Container>
      <ProductTemplate addCart={addCart} />
      <Wrap>
        <CartList
          cartItem={cartItem}
          onDelete={onDelete}
          addCount={addCount}
          minusCount={minusCount}
        />
        <Total>총 가격: {TotalPrice()} 원</Total>
      </Wrap>
    </Container>
  );
};

export default ShopTemplate;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const Wrap = styled.div`
  background-color: #e9e9e9;
  width: 35%;
  height: 100vh;
`;
const Total = styled.div`
  font-size: 17px;
  font-weight: 400;
  margin-left: 40px;
`;
