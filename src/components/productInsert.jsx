import { useState } from "react";

const ProductInsert = () => {
  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <input onChange={onChange} placeholder="상품 이름" />
      <input onChange={onChange} placeholder="상품 가격" />
      <button>추가</button>
    </>
  );
};

export default ProductInsert;
