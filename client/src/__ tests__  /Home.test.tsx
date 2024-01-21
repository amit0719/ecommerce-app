import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { mockData } from "./utils/data";
import Home from "../pages/Home";

const mockStore = configureStore([]);

test("renders the Home page with products", async () => {
  const store = mockStore(mockData);

  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  // Check if the products are rendered
  mockData.products.products.forEach((product) => {
    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
  });

  // You can add more specific assertions based on your component structure
  // For example, checking if the container and row classes are present
  expect(screen.getByTestId("container")).toHaveClass("container");
  expect(screen.getByTestId("row")).toHaveClass("row");
});

test("renders the Home page with no products", async () => {
  const store = mockStore({ products: { products: [] } }); // simulate no products in the store

  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  expect(screen.getByText("No products available.")).toBeInTheDocument();
});
