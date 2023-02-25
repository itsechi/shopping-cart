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
});
