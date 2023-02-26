import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("App component", () => {
  it("Renders home component", () => {
    render(<App />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.textContent).toMatch(/Furniture/i);
  });

  it("Renders living component after user click", async () => {
    render(<App />);
    const button = screen.getByRole("link", { name: "Living" });
    userEvent.click(button);
    const heading = await screen.findByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toMatch(/Living room furniture/i);
  });

  it("Renders cart component after user click", async () => {
    render(<App />);
    const button = screen.getByLabelText("shopping cart");
    userEvent.click(button);
    const heading = await screen.findByRole("heading", { level: 3 });
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toMatch(/Cart/i);
  });

  it("Renders a correct product after user click", async () => {
    render(<App />);
    const button = screen.getByRole("link", { name: "Living" });
    userEvent.click(button);
    const productCard = await screen.findByRole("link", {
      name: "AULANI series",
    });
    userEvent.click(productCard);
    const productTitle = await screen.findByRole("heading", { level: 1 });
    expect(productTitle).toBeInTheDocument();
    expect(productTitle.textContent).toMatch("AULANI series");
  });
});
