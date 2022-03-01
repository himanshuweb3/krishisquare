import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../component/ProductCard";

const Products = ({ user }) => {
  console.log(user);
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios({
          method: "get",
          url: "/api/v1/products",
        });
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1 className='text-center heading-primary'>Our Product Offerings</h1>
      <div className='container flex-wrap justify-content-center d-flex mt-5 mb-5'>
        {products &&
          products.map((product) => (
            <ProductCard
              user={user}
              key={product._id}
              img={`${product.photo.url}`}
              text={product.name}
            />
          ))}
      </div>
    </>
  );
};

export default Products;
