import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Catagories from "./Components/Catagories/Catagories";
import Detail from "./Components/Detail/Detail";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: async () => {
            return fetch(
              "https://www.themealdb.com/api/json/v1/1/categories.php"
            );
          },
        },
        {
          path: "/home",
          element: <Home></Home>,
          loader: async () => {
            return fetch(
              "https://www.themealdb.com/api/json/v1/1/categories.php"
            );
          },
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "catagories",
          element: <Catagories></Catagories>,
          loader: async () => {
            return fetch(
              "https://www.themealdb.com/api/json/v1/1/categories.php"
            );
          },
        },
        {
          path: "/detail",
          element: <Detail></Detail>,
          loader: async () => {
            return fetch(
              "https://www.themealdb.com/api/json/v1/1/categories.php"
            );
          },
        },
      ],
    },
    {
      path: "*",
      element: (
        <h2 className="my-5"> 404! not found. enter a correct location..!!!</h2>
      ),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
