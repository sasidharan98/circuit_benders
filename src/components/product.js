import "./Product.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

// Components
import DetailedProduct from "../components/DetailedProduct";
import Item from "../components/Item";
//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const Product = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  console.log(getProducts)
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="Product">
      <h2 className="Product__title">Latest Products</h2>
      <div className="Product__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Item
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Product;