import React, { useEffect, useState } from 'react';
import Products from './Products';
import axios from 'axios';

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <Products data={products} />
      )}
    </div>
  );
};

export default HomePage;
