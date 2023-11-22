import FastFoodItem from "../FastFoodItem/fastFoodItem";

const FastFoodList = ({ fastFoodItems }) => {
  return (
    <div className="row">
      {fastFoodItems.map((fastFood) => {
        return (
          <div
            className="col-12 col-sm-6 col-md-4 mb-grid-gutter"
            key={fastFood.id}
          >
            <FastFoodItem {...fastFood} />
          </div>
        );
      })}
    </div>
  );
};

export default FastFoodList;
