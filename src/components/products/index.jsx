import ProductItem from "./components/product-item";
import "./style.css";

function ProductList({ name, city, sampleData }) {
  return (
    <div>
      <h3 className="title">ECommerce project</h3>
      <h4>
        Name is {name}, he/she belongs to city {city}
      </h4>
      <ul>
        {sampleData.map((item, index) => (
          <ProductItem eachItem={item} key={index} />
        ))}
      </ul>
    </div>
  );
}
export default ProductList;
