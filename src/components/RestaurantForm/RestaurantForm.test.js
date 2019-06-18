import "jest-dom/extend-expect";
import "@testing-library/react/cleanup-after-each";
import React from "react";
import { render} from "@testing-library/react";
import RestaurantForm from "./RestaurantForm";

test("displays all form fields on load", () => {
  const { getByLabelText } = render(<RestaurantForm />);

  expect(getByLabelText("Name")).toHaveAttribute("type", "text");
  expect(getByLabelText("Address")).toHaveAttribute("type", "text");
  expect(getByLabelText("Opening Time")).toHaveAttribute("type", "text");
  expect(getByLabelText("Closing Time")).toHaveAttribute("type", "text");
  expect(getByLabelText("Cuisine")).toBeInTheDocument()
  expect(getByLabelText("Average Price")).toHaveAttribute("type", "number");
  expect(getByLabelText("Image URL")).toHaveAttribute("type", "text");
});



