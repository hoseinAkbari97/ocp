import React, { useEffect, useState } from 'react';
import { getProduct } from '../services/api';

const ProductDetail = ({ match }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(match.params.id).then((response) => {
      setProduct(response.data);
    });
  }, [match.params.id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductDetail;
