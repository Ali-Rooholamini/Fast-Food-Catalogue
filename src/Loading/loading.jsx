const Loading = (color) => {
  return (
    <div className="d-flex justify-content-center m-auto">
      <div
        className={`loading spinner-border text-${color || "success"}`}
      ></div>
    </div>
  );
};

export default Loading;
