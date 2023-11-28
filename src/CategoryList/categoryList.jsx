/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import axios from "../axios";

import Loading from "../Loading/loading";

const CategoryList = ({ filteredItems, children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategoryList = async () => {
      const response = await axios.get("/FoodCategory/categories");
      setCategories(response.data);
      setIsLoading(false);
    };

    getCategoryList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderingContent = () => {
    if (isLoading) {
      return <Loading color="primary"></Loading>;
    }

    return (
      <div className="w-100 ps-3 d-flex justify-content-between gap-5 align-items-center">
        <ul className="nav">
          <li className="nav-item" onClick={() => filteredItems()}>
            <a className="nav-link" href="#">
              همه فست فودها
            </a>
          </li>
          {categories.map((category) => {
            return (
              <li
                className="nav-item"
                key={category.id}
                onClick={() => filteredItems(category.id)}
              >
                <a className="nav-link" href="#">
                  {category.name}
                </a>
              </li>
            );
          })}
        </ul>

        {children}
      </div>
    );
  };

  return (
    <nav className="container mt-n5">
      <div
        className="d-flex align-items-center bg-white rounded-3 shadow-lg py-4"
        style={{ height: "80px" }}
      >
        {renderingContent()}
      </div>
    </nav>
  );
};

export default CategoryList;
