import React from "react";

const HomeDetail = ({ homeData }) => {
  const { strCategoryThumb, strCategory } = homeData;
  return (
    <div class="card text-bg-dark my-3">
      <img src={strCategoryThumb} class="card-img" alt="..." />
      <div class="card-img-overlay">
        <h2 class="card-title text-start">{strCategory}</h2>
      </div>
    </div>
  );
};

export default HomeDetail;
