import ProductCard from "./productCard";

const ProductList = ({ products }) => {
  return (
    <ul>
      {products.map((item) => (
        <ProductCard products={item} key={item.id} />
      ))}
    </ul>
  );
};

export default ProductList;
