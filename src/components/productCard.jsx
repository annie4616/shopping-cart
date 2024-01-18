const ProductCard = ({ products }) => {
  // console.log(products);
  const { id, name } = products;
  // console.log(products);
  return (
    <li>
      <span>{name}</span>
      <button>담기</button>
    </li>
  );
};

export default ProductCard;
