import React from "react";
import Router from "react-router-dom";
import ProductDetails from "../pages/productDetails/ProductDetails";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  userParams: jest.fn(),
}));

describe("Cart functions", () => {
  it("Renders correct items in the cart", () => {
    jest.spyOn(Router, "useParams").mockReturnValue({ id: "blaise" });
    render(<ProductDetails />);
    const btn = screen.getByRole("button", { name: /add to cart/i });
    console.log(btn);
  });
});
