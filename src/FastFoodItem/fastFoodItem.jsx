const FastFoodItem = ({ name, price, ingredients, imageUrl }) => {
  return (
    <div className="card product-card h-100 border-0 shadow-sm pb-1">
      <span className="badge badge-end badge-shadow bg-success fs-md fw-medium">
        فیمت : {price.toLocaleString()} تومان
      </span>
      <img className="card-img-top" src={imageUrl} alt={name} />
      <div className="card-body d-flex flex-column text-center pt-3 pb-4">
        <h5 className="mb-2">{name}</h5>
        <p className="text-muted fs-ms fw-bold mb-3">{ingredients}</p>
        <button
          className="btn btn-outline-success btn-sm fw-bold mt-auto w-100"
          type="button"
        >
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default FastFoodItem;
