import React from "react";
import { Link } from "react-router-dom";

const Category = ({ foods }) => {
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
    foods;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={strCategoryThumb} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{strCategory}</h5>
        <Link to={"/detail"} className="btn btn-primary container-fluid">
          See details
        </Link>
      </div>
    </div>
  );
};

export default Category;
