import { useEffect, useState } from "react";
import "./App.css";
import axios from "./axios";

import CategoryList from "./CategoryList/categoryList";
import Header from "./Header/header";
import Loading from "./Loading/loading";
import FastFoodList from "./FastFootList/fastFoodList";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fastFoodItems, setFastFoods] = useState([]);

  const getFastFoods = async (categoryId = null) => {
    const response = await axios.get(
      `/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`
    );
    setFastFoods(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getFastFoods();
  }, []);

  const filteredItems = (categoryId) => {
    getFastFoods(categoryId);
  };

  const renderingContent = () => {
    if (isLoading) {
      return <Loading color="dark" />;
    }

    return <FastFoodList fastFoodItems={fastFoodItems} />;
  };

  return (
    <div className="wrapper bg-faded-color">
      <Header></Header>
      <CategoryList filteredItems={filteredItems}></CategoryList>
      <div className="container mt-4">{renderingContent()}</div>
    </div>
  );
}

export default App;
