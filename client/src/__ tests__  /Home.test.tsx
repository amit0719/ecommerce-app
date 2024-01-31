import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { mockData } from "./utils/data";
import Home from "../pages/Home";
import { renderWithProviders } from "./utils/TestWrapper";

const mockStore = configureStore([]);

describe("Home Page", () => {
  test("renders the Home page with products", async () => {
    renderWithProviders(<Home />);

    mockData.products.products.forEach((product) => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
      expect(screen.getByText(`${product.price}`)).toBeInTheDocument();
    });
  });

  test("renders the Home page with no products", async () => {
    const store = mockStore({ products: { products: [] } });
    renderWithProviders(<Home />, store);

    expect(screen.getByText("No products available.")).toBeInTheDocument();
  });
});
