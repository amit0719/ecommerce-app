import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Brand from "../components/Brand";

describe("Brand component", () => {
  test('renders brand link with text "Electro"', () => {
    render(
      <Router>
        <Brand />
      </Router>
    );

    const brandLink = screen.getByRole("link", { name: /Electro/i });
    expect(brandLink).toBeInTheDocument();
    expect(brandLink).toHaveClass("nav-link");
  });

  test("navigates to the home page when the link is clicked", () => {
    render(
      <Router>
        <Brand />
      </Router>
    );

    const brandLink = screen.getByRole("link", { name: /Electro/i });
    expect(brandLink.getAttribute("href")).toBe("/");
  });
});
