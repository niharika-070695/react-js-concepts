import ProductItem from "./components/product-item";
import "./style.css";
import { useState, useEffect } from "react";

function ProductList({ name, city, sampleData }) {
  const [flag, setFlag] = useState(false);
  const [count, setCount] = useState(0);
  const [changeStyle, setChangeStyle] = useState(false);
  function handleToggleText() {
    setFlag(!flag);
  }
  function handleIncreaseCount() {
    setCount(count + 1);
  }
  useEffect(() => {
    setFlag(!flag);
    console.log("run only once on page load");
  }, []);

  useEffect(() => {
    if (count === 10) setChangeStyle(true);
  }, [count]);
  console.log(changeStyle);
  return (
    <div>
      <h3 className="title">ECommerce project</h3>
      <button onClick={handleToggleText}>Toggle Text</button>
      {flag ? (
        <h4>
          Name is {name}, he/she belongs to city {city}
        </h4>
      ) : (
        <h4>Hello</h4>
      )}
      <div>
        <button
          style={{
            backgroundColor: changeStyle ? "black" : "white",
            color: changeStyle ? "white" : "black",
          }}
          onClick={handleIncreaseCount}
        >
          Increase Count
        </button>
        <p>Count is {count}</p>
      </div>

      <ul>
        {sampleData.map((item, index) => (
          <ProductItem eachItem={item} key={index} />
        ))}
      </ul>
    </div>
  );
}
export default ProductList;
