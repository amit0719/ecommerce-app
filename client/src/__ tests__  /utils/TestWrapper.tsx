import React, { ReactElement, ReactNode } from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { mockData } from "./data";

const mockStore = configureStore([]);

const TestWrapper = ({ children }) => {
  const store = mockStore(mockData);

  return (
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>
  );
};

export const customRender = (ui: ReactElement, options?: any) =>
  render(ui, { wrapper: TestWrapper, ...options });

export default TestWrapper;
