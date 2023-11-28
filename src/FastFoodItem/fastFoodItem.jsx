import "./fastFoodItem.css";

import { HiShoppingCart } from "react-icons/hi";

const FastFoodItem = ({ name, price, ingredients, imageUrl, delay }) => {
  return (
    <div
      className="card product-card h-100 border-0 shadow-sm pb-1 fade-in-horiz"
      style={{ animationDelay: delay + "ms" }}
    >
      <span className="badge badge-end badge-shadow bg-success fs-md fw-medium">
        فیمت : {price.toLocaleString()} تومان
      </span>
      <div className="card__placeholder">
        <img className="card-img-top" src={imageUrl} alt={name} />
      </div>
      <div className="card-body d-flex flex-column text-center pt-3 pb-4">
        <h5 className="mb-2">{name}</h5>
        <p className="text-muted fs-ms fw-bold mb-3">{ingredients}</p>
        <button
          className="btn btn-outline-success btn-sm fw-bold mt-auto w-100"
          type="button"
        >
          <HiShoppingCart className="fs-5 ms-3" />
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default FastFoodItem;
