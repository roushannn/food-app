import React from "react";

const FilterBar = props => {
  const { cuisines, selected, handleClick } = props;

  const getClass = cuisine => {
    if (selected === cuisine) {
      return "btn btn-outline-primary active";
    } else {
      return "btn btn-outline-primary";
    }
  };

  return (
    <div className="btn-group" role="group">
      {cuisines.map(cuisine => (
        <button
          key={cuisine._id}
          type="button"
          className={getClass(cuisine)}
          onClick={() => handleClick(cuisine)}
          data-testid={`filter-btn-${cuisine.name.toLowerCase()}`}
        >
          {cuisine.name}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
