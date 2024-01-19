import styled from "styled-components";

const ProductCard = ({ products, onDelete, addCart }) => {
  // console.log(products);
  const { id, name, price } = products;
  return (
    <Product>
      <Name>{name}</Name>
      <Price>{price}원</Price>
      <button onClick={() => addCart(products)}>담기</button>
      <button onClick={() => onDelete(id)}>X</button>
    </Product>
  );
};

export default ProductCard;

const Product = styled.li`
  height: 30px;
  width: 400px;
  border: 1px solid gray;
  border-radius: 5px;
  margin-bottom: 10px;
  list-style-type: none;
  display: flex;
  padding-left: 15px;
  align-items: center;
`;

const Name = styled.span`
  width: 60%;
`;
const Price = styled.span`
  width: 20%;
`;
