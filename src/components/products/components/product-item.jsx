function ProductItem({ eachItem, key }) {
  return (
    <div key={key}>
      <p>{eachItem}</p>
    </div>
  );
}
export default ProductItem;
