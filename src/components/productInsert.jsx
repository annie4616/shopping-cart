import { useState } from "react";
import styled from "styled-components";

const ProductInsert = ({ onInsert }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const addInput = () => {
    const info = { name: name, price: price };
    onInsert({ info });
    setName("");
    setPrice("");
  };

  return (
    <InputContainer>
      <InputWrap>
        <ProductInput
          onChange={onChangeName}
          value={name}
          placeholder="상품 이름"
        />
        <ProductInput
          onChange={onChangePrice}
          value={price}
          placeholder="상품 가격"
        />
      </InputWrap>
      <AddButton onClick={addInput}>추가</AddButton>
    </InputContainer>
  );
};

export default ProductInsert;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductInput = styled.input`
  width: 300px;
  height: 25px;
  border: 1px solid gray;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const AddButton = styled.button`
  width: 100px;
  height: 30px;
  font-size: 15px;
  background-color: #fbfbd5;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
`;
