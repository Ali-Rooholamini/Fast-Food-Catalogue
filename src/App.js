import { useState } from "react";
import "./App.css";

import CategoryList from "./CategoryList/categoryList";
import Header from "./Header/header";
import Loading from "./Loading/loading";
import FastFoodList from "./FastFootList/fastFoodList";
import SearchBar from "./SearchBar/searchBar";
import notFound from "./assets/images/404.png";
import useAxios from "./useAxios";

function App() {
  const [url, setUrl] = useState("/FastFood/list/");

  const [fastFoodItems, isLoading] = useAxios({
    url,
  });

  const filteredItems = (categoryId) => {
    setUrl(`/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`);
  };

  const searchedItem = async (term) => {
    setUrl(`/FastFood/search/${term ? "?term=" + term : ""}`);
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
