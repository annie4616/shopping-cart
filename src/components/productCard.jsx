import styled from "styled-components";

const ProductCard = ({ products, onDelete, addCart }) => {
  // console.log(products);
  const { id, name, price } = products;
  return (
    <Product>
      <Name>{name}</Name>
      <Price>{price}원</Price>
      <AddButton onClick={() => addCart(products)}>담기</AddButton>
      <DeleteButton onClick={() => onDelete(id)}>X</DeleteButton>
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

const AddButton = styled.button`
  background-color: transparent;
  border: 1px solid black;
  width: 40px;
  height: 23px;
  border-radius: 3px;
`;

const DeleteButton = styled.button`
  background-color: #fd8989;
  color: white;
  height: 23px;
  width: 35px;
  border: 1px solid gray;
  border-radius: 3px;
  margin: auto 10px auto 5px;
`;
