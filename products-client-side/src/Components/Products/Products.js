import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Filter from "../Filter/Filter";
import ProductsCard from "../ProductCard/ProductsCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [models, setModels] = useState([]);
  const [brands, setBrands] = useState([]);
  const handleCategories = (event) => {
    const category = event.target.value;
    console.log(event.target.value);
    fetch(
      `https://products-server-side.vercel.app/products/?category=${category}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProducts(data);
      });
  };
  const handleModels = (event) => {
    console.log(event.target.value);
    const model = event.target.value;
    fetch(`https://products-server-side.vercel.app/products/?model=${model}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProducts(data);
      });
  };
  useEffect(() => {
    fetch("https://products-server-side.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  useEffect(() => {
    // async function loadProducts() {
    //   const url = await fetch("https://products-server-side.vercel.app/products");
    //   const res = await url.json();
    //   setProducts(res);
    // }
    // loadProducts();
    fetch("https://products-server-side.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
    fetch("https://products-server-side.vercel.app/models")
      .then((res) => res.json())
      .then((data) => {
        setModels(data);
      });
    fetch("https://products-server-side.vercel.app/brands")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, [products]);
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center">
        Find Your Best products
      </h2>
      <Filter
        categories={categories}
        models={models}
        handleCategories={handleCategories}
        handleModels={handleModels}
      ></Filter>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-8">
        {products.map((product) => (
          <ProductsCard
            key={product.product_id}
            product={product}
          ></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
