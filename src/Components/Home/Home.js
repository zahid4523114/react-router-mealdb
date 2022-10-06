import React from "react";
import { useLoaderData } from "react-router-dom";
import HomeDetail from "../HomeDetail/HomeDetail";

const Home = () => {
  const homeData = useLoaderData();
  console.log(homeData.categories);
  return (
    <div className="p-3">
      <h2>Eat healthy, Stay healthy</h2>
      {homeData.categories.map((data) => (
        <HomeDetail key={data.idCategory} homeData={data}></HomeDetail>
      ))}
    </div>
  );
};

export default Home;
