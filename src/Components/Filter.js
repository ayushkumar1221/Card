import React from "react";

const Filter = (props) => {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

  function filterHandler(title) {
    setCategory(title);
  }

  return (
    <div className="btn">
      {filterData.map((data) => (
        <button
          className="main-btn"
          key={data.id}
          onClick={() => filterHandler(data.title)}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
