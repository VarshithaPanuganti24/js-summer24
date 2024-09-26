import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTableContainer from './ProductTableContainer';

export default function ProductTable(){
const products = [
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
  { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

const ProductTable = () => {
  const [searchText, setsearchText] = useState('');
  const [onlyInStock, setOnlyInStock] = useState(false);
  
  return (
    <div className="product-table">
      <h1>Filterable Product Table</h1>
      <SearchBar
      searchText ={searchText}/>
      <ProductTableContainer
      products={products}/>
    </div>
  );
};


}





//visualize the strucure
//state and filter