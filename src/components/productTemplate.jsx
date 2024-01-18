import { useState, useRef } from "react";
import styled from "styled-components";
import ProductList from "./productList";
import ProductInsert from "./productInsert";

const ProductTemplate = () => {
  const newId = useRef(2);
  const [products, setProducts] = useState([
    {
      id: 0,
      name: "소주",
    },
    {
      id: 1,
      name: "맥주",
    },
  ]);
  return (
    <>
      <ProductInsert />
      <ProductList products={products} />
    </>
  );
};

export default ProductTemplate;
