import { ReactElement } from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { mockData } from "./data";

const mockStore = configureStore([]);
const store = mockStore(mockData);

const TestWrapper = ({ children, customStore }) => {
  return (
    <Provider store={customStore || store}>
      <Router>{children}</Router>
    </Provider>
  );
};

export default TestWrapper;

export const renderWithProviders = (
  ui: ReactElement,
  customStore = store,
  options?: any
) => {
  return {
    store,
    ...render(ui, {
      wrapper: (props) => <TestWrapper customStore={customStore} {...props} />,
      ...options,
    }),
  };
};
