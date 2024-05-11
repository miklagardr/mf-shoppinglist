import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
function Categories() {
  const categories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ];
  const navigate = useNavigate(); 
  return (
    <div>
      <Navbar />
      <h1 className="flex justify-center uppercase my-5 text-2xl font-thin tracking-wider">Categories</h1>
      <div className="grid grid-cols-3 gap-4 justify-center items-center container mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex justify-center items-center bg-gray-100 p-4 rounded-md shadow-md cursor-pointer  transition duration-300 hover:bg-white hover:shadow-lg"
            onClick={() => navigate(`/products/${category}`)}
          >
            
            <h2 className="text-2xl font-thin tracking-wider uppercase">{category}</h2>
          </div>
        ))}
        </div>
    </div>
  );
}

export default Categories;
