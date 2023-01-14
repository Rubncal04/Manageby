// import { Link } from "react-router-dom";
import React from 'react';
import getProducts from '../../services/getProducts';
import { useEffect, useState } from 'react';
import { AllProducts } from './ProductCard';

function Products (){
	const [products, setProducts] = useState({
    loading: false, results: []
  })

  useEffect(() => {
    setProducts(currentProducts => ({loading: true, results: currentProducts.results}))
    getProducts()
    .then(products => {
      setProducts({loading: false, results: products})
    })
  }, [])

  if (products.loading) return <i>Loading</i>

  return(
    <div>
      <h1>Products</h1>
      <AllProducts products={products.results}/>
    </div>
  )
}

export { Products }
