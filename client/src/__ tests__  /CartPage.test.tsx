import React from "react";
import { screen, fireEvent, within, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { customRender } from "./utils/TestWrapper";
import CartPage from "../pages/Cart";
import { mockData } from "./utils/data";

describe("CartPage component", () => {
  const mockCartItems = mockData.cart.cartItems.cartItems;
  const totalAmount = mockData.cart.cartItems.totalAmount;
  test("renders empty cart message", () => {
    customRender(<CartPage />);

    const emptyCartMessage = screen.getByRole("alert");
    expect(emptyCartMessage).toBeInTheDocument();
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /browse products/i })
    ).toHaveAttribute("href", "/");
  });

  test("renders cart items and price details", () => {
    customRender(<CartPage />);

    expect(screen.getByText(/cart/i)).toBeInTheDocument();

    const cartItemConatiner = screen.getByTestId(
      "cart-item-65894cfd20789e0bf6a8140f"
    );

    expect(
      within(cartItemConatiner).getByText(mockCartItems[0].name)
    ).toBeInTheDocument();
    expect(
      within(cartItemConatiner).getByText(`Price: $${mockCartItems[0].price}`)
    ).toBeInTheDocument();
  });

  //   test("updates cart item quantity", async () => {
  //     const updateCartItem = jest.fn();
  //     customRender(<CartPage />);

  //     const cartItemConatiner = screen.getByTestId(
  //       "cart-item-65894cfd20789e0bf6a8140f"
  //     );

  //     fireEvent.click(within(cartItemConatiner).getByText("+"));
  //     expect(updateCartItem).toHaveBeenCalledWith(
  //       "65acff049c7467c00f67191a",
  //       "1",
  //       2
  //     );
  //   });

  //   test("removes cart item", async () => {
  //     const store = mockStore({
  //       auth: { isAuthenticated: true, userId: "testUserId" },
  //       cart: {
  //         cartItems: {
  //           cartItems: [{ productId: "1", quantity: 1 }],
  //           totalAmount: 19.99,
  //         },
  //       },
  //     });

  //     customRender(<CartPage />, { store });

  //     // Click the "Remove" button to remove the cart item
  //     fireEvent.click(screen.getByText(/remove/i));
  //     expect(removeFromCart).toHaveBeenCalledWith("testUserId", "1");
  //     expect(fetchCartItems).toHaveBeenCalledWith({ userId: "testUserId" });
  //   });

  //   test("navigates to checkout on checkout button click", () => {
  //     customRender(<CartPage />);

  //     // Click the "Checkout" button
  //     fireEvent.click(screen.getByRole("button", { name: /checkout/i }));
  //     expect(useNavigate).toHaveBeenCalledWith("/checkout");
  //   });
});
