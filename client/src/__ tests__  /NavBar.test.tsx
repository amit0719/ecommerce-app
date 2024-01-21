import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../components/common/NavBar";
import { mockData } from "./utils/data";
import { customRender } from "./utils/TestWrapper";

describe("Navbar component", () => {
  test("renders featured categories correctly", () => {
    customRender(<Navbar />);

    mockData.categories.categories
      .filter((category) => category.isFeatured)
      .forEach((category) => {
        const categoryLink = screen.getByText(category.name);
        expect(categoryLink).toBeInTheDocument();
        expect(categoryLink.getAttribute("href")).toBe(
          `/category/${category._id}`
        );
      });
  });
});
