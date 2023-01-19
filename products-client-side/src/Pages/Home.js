import React from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Products from "../Components/Products/Products";

const Home = () => {
  return (
    <div>
      <h2 className="text-3xl font-semi-bold text-center">Our Products</h2>
      <Products></Products>
    </div>
  );
};

export default Home;
