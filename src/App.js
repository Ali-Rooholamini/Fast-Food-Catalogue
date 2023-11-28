import { useEffect, useState } from "react";
import "./App.css";
import axios from "./axios";

import CategoryList from "./CategoryList/categoryList";
import Header from "./Header/header";
import Loading from "./Loading/loading";
import FastFoodList from "./FastFootList/fastFoodList";
import SearchBar from "./SearchBar/searchBar";
import notFound from "./assets/images/404.png";

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

  const searchedItem = async (term) => {
    setIsLoading(true);
    const response = await axios.get(
      `/FastFood/search/${term ? "?term=" + term : ""}`
    );
    setIsLoading(false);
    setFastFoods(response.data);
  };

  const renderingContent = () => {
    if (isLoading) {
      return <Loading color="dark" />;
    }

    if (fastFoodItems.length === 0) {
      return (
        <>
          <div className="alert alert-warning text-center">
            آیتم مورد نظر شما یافت نشد ...
          </div>
          <img
            className="mx-auto mt-5 d-block fade-in-horiz"
            src={notFound}
            alt="notFound"
          />
        </>
      );
    }

    return <FastFoodList fastFoodItems={fastFoodItems} />;
  };

  return (
    <div className="wrapper bg-faded-color">
      <Header></Header>
      <CategoryList filteredItems={filteredItems}>
        <SearchBar searchedItem={searchedItem} />
      </CategoryList>
      <div className="container mt-4">{renderingContent()}</div>
    </div>
  );
}

export default App;
