import React from "react";
import AllProducts from "../AllProducts/AllProducts";

export default function Productes() {
  return (
    <>
      <h2 className="text-3xl my-10 text-green-800 text-center">All Products</h2>
      <div className="py-4">
        <AllProducts />
      </div>
    </>
  );
}
