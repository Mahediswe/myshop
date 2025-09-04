import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductDetails from './ProductDetails'
import PopularProducts from '../components/PopularProducts'
import FeatureBanner from "../components/FeatureBanner";

const ProductDetail = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <ProductDetails/>
      <PopularProducts/>
      <FeatureBanner/>
      <Footer/>
    </div>
  )
}

export default ProductDetail
