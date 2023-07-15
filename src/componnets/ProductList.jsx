import React, { useEffect, useState } from 'react';
import './ProductList.css';
import Rating from './ratings/Rating';
import SkeletonProductCard from './skeletons/SkeletonProductCard';

const ProductList = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
 

   setTimeout(async()=>{
    const res=  await fetch(`https://dummyjson.com/products`)
  const data = await res.json();
  setProducts(data?.products)
      },6000)
  }, []);

  return (
    <div className="product-list">
      {products && products?.map(product => (
        <div className="product-card" key={product.id}>
          <img src={product.images?.[0]} alt={product.title} className="product-image" />
          <div className="product-details">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">${product.price}</p>
            <div className="product-rating">
            <Rating numReviews={2} rating={product.rating} /> 
            </div>
            <div className="product-actions">
              <button className="buy-now-button">Buy Now</button>
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          </div>
        </div>
      ))}

{!products && (
          [...Array(6)].map(n=>( <SkeletonProductCard key={n+1}  />))    
        )}
    </div>
  );
};


export default ProductList;
