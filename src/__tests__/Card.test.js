import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../components/card/Card";
import { BrowserRouter as Router } from "react-router-dom";

describe("Card component", () => {
  const product = {
    name: "name",
    price: "price",
    img: "img",
    id: "id",
  };

  it("Renders a correct card for a product", () => {
    render(
      <Router>
        <Card
          name={product.name}
          price={product.price}
          img={product.image}
          id={product.id}
        />
      </Router>
    );
    const cardTitle = screen.getByRole("link", { name: "name" });
    expect(cardTitle).toBeInTheDocument();
    expect(cardTitle.href).toMatch(`http://localhost/${product.id}`);
  });
});
