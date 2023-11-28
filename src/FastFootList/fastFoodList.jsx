import FastFoodItem from "../FastFoodItem/fastFoodItem";

const FastFoodList = ({ fastFoodItems }) => {
  let delay = 500;
  return (
    <div className="row">
      {fastFoodItems.map((fastFood) => {
        delay += 30;
        return (
          <div
            className="col-12 col-sm-6 col-md-4 mb-grid-gutter"
            key={fastFood.id}
          >
            <FastFoodItem {...fastFood} dela={delay} />
          </div>
        );
      })}
    </div>
  );
};

export default FastFoodList;
