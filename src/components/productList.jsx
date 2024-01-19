import ProductCard from "./productCard";
import styled from "styled-components";

const ProductList = ({ products, onDelete, addCart }) => {
  return (
    <ListContainer>
      {products.map((item) => (
        <ProductCard
          products={item}
          key={item.id}
          onDelete={onDelete}
          addCart={addCart}
        />
      ))}
    </ListContainer>
  );
};

export default ProductList;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
