import React, { useEffect, useState } from "react";

export default function Products() {
  const [product, setProduct] = useState([]);

  async function getProduct() {
    try {
      let response = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`
      );
      let data = await response.json();
      setProduct(data.data);
    } catch (error) {
      console.log("Product Error :", error);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <div
        className="products-wrapper"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
        }}
      >
        {product.map((item) => {
          return (
            <div key={item.id} style={{ border: "2px solid black" }}>
              {/* Map the below div agaisnt your product data */}
              <div className="id"> {item.id} </div>
              <h3 className="title"> {item.title} </h3>
              <div className="category"> {item.category} </div>
              <div className="price"> {item.price} </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
