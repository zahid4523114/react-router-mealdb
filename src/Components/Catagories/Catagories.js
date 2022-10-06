import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Catagories.css";
import Category from "../Category/Category";

const Catagories = () => {
  const foodsCatagories = useLoaderData();
  //   console.log(foodsCatagories.categories);
  return (
    <div className="my-3">
      <h2 className="mb-3">Catagories of foods</h2>
      <div className="card-container container-fluid">
        {foodsCatagories.categories.map((food) => (
          <Category key={food.idCategory} foods={food}></Category>
        ))}
      </div>
    </div>
  );
};

export default Catagories;
