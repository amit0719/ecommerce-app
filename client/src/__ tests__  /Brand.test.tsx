import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Brand from "../components/Brand";
import { renderWithProviders } from "./utils/TestWrapper";

describe("Brand component", () => {
  test('renders brand link with text "Electro"', () => {
    renderWithProviders(<Brand />);

    const brandLink = screen.getByRole("link", { name: /Electro/i });
    expect(brandLink).toBeInTheDocument();
    expect(brandLink).toHaveClass("nav-link");
  });

  test("navigates to the home page when the link is clicked", () => {
    renderWithProviders(<Brand />);

    const brandLink = screen.getByRole("link", { name: /Electro/i });
    expect(brandLink.getAttribute("href")).toBe("/");
  });
});
