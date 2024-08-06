"use client";
import { useState } from "react";
import CategoriesFunc from "./categories";
import AllProductsFunc from "./Allproducts";


const productsList = [
  {
    serialNum: 1,
    name: "Iphone",
    price: 12,
    category: "Mobile Phone",
  },
  {
    serialNum: 2,
    name: "MTJ",
    price: 13,
    category: "Cloths",
  },
  {
    serialNum: 3,
    name: "Tesla Cybertruck",
    price: 35,
    category: "Cars",
  },
  {
    serialNum: 4,
    name: "Rado",
    price: 123,
    category: "Watches",
  },
  {
    serialNum: 5,
    name: "Oppo",
    price: 121,
    category: "Mobile Phone",
  }
]

export default function MainProductsFilter() {
  const [categList, setCategList] = useState([
    'All',
    "Mobile Phone",
    "Cloths",
    "Cars",
    "Watches", 
  ]);

  const [products, setProducts] = useState(productsList);
  const [selectedCateg, setSelectedCateg] = useState("All");
  
  return (
    <>
      <CategoriesFunc categlist={categList} setSelectedCateg={setSelectedCateg} />
      <AllProductsFunc productsList={products} selectedCateg={selectedCateg} />
    </>
  );
}
