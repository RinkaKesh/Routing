import { useEffect, useState } from "react";
export default function AllProducts() {
  const [product, setProduct] = useState([]);

  async function getProducts() {
    try {
      let response = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`
      );
      let data = await response.json();
      setProduct(data.data);
    } catch (error) {
      console.log("error :", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <h2>All Products</h2>
      <div
        className="products-wrapper"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "5px",
        }}
      >
        {/* Map the below div against product data */}
        {product.map((item) => {
          return (
            <div
              key={item.id}
              style={{ border: "1px solid black", padding: "5px" }}
            >
              <h3 className="name">{item.title}</h3>
              <div className="brand"> {item.brand} </div>
              <div className="price"> {item.price} </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
