import "jest-dom/extend-expect";
import "@testing-library/react/cleanup-after-each";
import React from "react";
import { render } from "@testing-library/react";
import SortBySelect from "./SortBySelect";

test("renders a select list from options, 'Restaurant Name' is selected by default", () => {
  const sortByOptions = [
    { name: "Restaurant Name", value: "name" },
    { name: "Average Price", value: "averagePrice" }
  ];

  const { getByText, getByLabelText } = render(
    <SortBySelect
      options={sortByOptions}
      selected={"name"}
      handleSelect={() => {}}
    />
  );

  expect(getByText("Restaurant Name")).toBeVisible();
  expect(getByLabelText("Sort By")).toContainElement(
    getByText("Restaurant Name")
  );
  expect(getByLabelText("Sort By")).toContainElement(
    getByText("Average Price")
  );
});
