import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [subCategories, setSubCategories] = useState(null);
  const [category, setCategory] = useState(null);
  const [subLoading, setSubLoading] = useState(false);
  async function getCategories() {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/categories"
      );

      setCategories(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function getSubCategories(categoryId) {
    try {
      setSubLoading(true);
      let { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/categories/${categoryId}/subcategories`
      );
      setSubCategories(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setSubLoading(false);
    }
  }
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <h2 className="text-3xl my-10 text-green-800 text-center">All Categories</h2>
      {loading ? (
        <Loading />
      ) : categories ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6 ">
          {categories.map((category) => (
            <div
              onClick={() => {
                getSubCategories(category._id);
                setCategory(category.name);
              }}
              key={category._id}
              className="w-full bg-white border cursor-pointer border-gray-200 rounded-lg shadow hover:shadow-2xl hover:scale-[1.02] duration-500 dark:bg-gray-800 dark:border-gray-700"
            >
              <div>
                <img
                  loading="lazy"
                  className="rounded-t-lg w-full h-[400px]"
                  src={category.image}
                  alt="product image"
                />
              </div>
              <div className="p-5">
                <h5 className="text-xl font-semibold tracking-tight text-green-600  dark:text-white text-center">
                  {category.name}
                </h5>
              </div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}

      
     
    </>
  );
}
