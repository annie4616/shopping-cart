import { useState, useRef } from "react";
import styled from "styled-components";
import ProductList from "./productList";
import ProductInsert from "./productInsert";

const ProductTemplate = ({ addCart }) => {
  const newId = useRef(3);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "소주",
      price: 6000,
    },
    {
      id: 2,
      name: "맥주",
      price: 6000,
    },
  ]);
  const onInsert = ({ info }) => {
    const newCard = [
      {
        id: newId.current,
        name: info.name,
        price: info.price,
      },
    ];
    setProducts(products.concat(newCard));
    newId.current++;
  };
  const onDelete = (id) => {
    const newProductList = products.filter((item) => item.id !== id);
    setProducts(newProductList);
    console.log(id);
  };
  return (
    <ProductContainer>
      <div>상품 목록</div>
      <ProductInsert onInsert={onInsert} />
      <ProductList products={products} onDelete={onDelete} addCart={addCart} />
    </ProductContainer>
  );
};

export default ProductTemplate;

const ProductContainer = styled.div`
  width: 65%;
  height: 100vh;
  background-color: antiquewhite;
  > div {
    margin-top: 20px;
    text-align: center;
    font-weight: bold;
    font-size: 22px;
  }
  border-right: 1px solid #c4c4c4;
`;
