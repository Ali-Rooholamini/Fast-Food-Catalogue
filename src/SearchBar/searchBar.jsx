import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ searchedItem }) => {
  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchedItem(value);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="search flex-fill d-felx align-items-center"
    >
      <div className="input-group">
        <input
          className="form-control rounded-end pe-5"
          type="text"
          placeholder="جست و جو"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <BsSearch className="position-absolute top-50 translate-middle-y text-muted me-3" />
      </div>
    </form>
  );
};

export default SearchBar;
