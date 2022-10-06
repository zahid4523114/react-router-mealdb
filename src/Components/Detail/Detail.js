import React from "react";
import { useLoaderData } from "react-router-dom";

const Detail = () => {
  const details = useLoaderData();
  console.log(details.categories);
  return (
    <div className="my-3">
      {details.categories.map((detail) => (
        <p className="shadow-lg p-3 rounded container my-4">
          {detail.strCategoryDescription}
        </p>
      ))}
    </div>
  );
};

export default Detail;
