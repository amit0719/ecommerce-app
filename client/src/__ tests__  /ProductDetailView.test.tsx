import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";
import ProductDetailView from "../pages/ProductDetailView";
import userEvent from "@testing-library/user-event";
import thunk from "redux-thunk";
import { Tuple } from "@reduxjs/toolkit";

const middlewares = () => new Tuple(thunk);

const mockStore = configureStore(middlewares);

describe("ProductDetailView", () => {
  const store = mockStore({
    products: {
      product: {
        name: "Test Product",
        imageUrl: "image.jpg",
        price: 100,
        description: "Test description",
      },
    },
    auth: {
      isAuthenticated: true,
      userId: "123",
    },
  });

  test("renders product details", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/product/:123"]}>
          <Routes>
            <Route path="/product/:id" element={<ProductDetailView />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
  });

  test("handles add to cart click", () => {
    // mock dispatch
    const dispatch = jest.fn();

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/product/:123"]}>
          <Routes>
            <Route path="/product/:id" element={<ProductDetailView />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    console.log(store.getActions());

    userEvent.click(screen.getByText("Add to Cart"));
    //  expect(dispatch).toHaveBeenCalledTimes(2);
  });
});
