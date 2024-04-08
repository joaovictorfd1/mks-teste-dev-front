import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Main from "../Main";
import {
  ProductsDataContext,
  ProductsDataContextProps,
} from "@/useContext/data/useProductData";
import { ProductsDataFake } from "@/utils/mock";

describe("<Main />", () => {

  // Simulate context in Main
  const simulatorContext: ProductsDataContextProps = {
    error: null,
  };
  it("should show loading", () => {
    render(
      <ProductsDataContext.Provider value={simulatorContext}>
        <Main />
      </ProductsDataContext.Provider>
    );

    const loading = screen.getAllByLabelText("loading");

    // Verify one product in list
    expect(loading[0]).toBeInTheDocument();
  });

  it("should show error page", () => {
    // Add an error in context
    render(
      <ProductsDataContext.Provider
        value={{ ...simulatorContext, error: new Error() }}
      >
        <Main />
      </ProductsDataContext.Provider>
    );

    // Search error message
    const errorPage = screen.getByText("Ops! Aconteceu um erro. Messagem:");

    // Verify error message on the page
    expect(errorPage).toBeInTheDocument();
  });

  it("should correctly lengthen the products", () => {
    const fakeProducts = ProductsDataFake.products;
    // Verify if the array of products to be length equals to 3
    expect(fakeProducts.length).toBe(3);
  });

  it("should correctly name, describe, and price each product", () => {
    const fakeProducts = ProductsDataFake.products;
    fakeProducts.forEach(product => {
      // Verify if each product has a name
      expect(product.name).toBeTruthy();
      // Verify if each product has a description
      expect(product.description).toBeTruthy();
      // Verify if each product has a price as a string
      expect(typeof product.price).toBe('string');
    });
  });

  it("should render the product correctly", () => {
    // Add three products in Context
    render(
      <ProductsDataContext.Provider
        value={{ ...simulatorContext, data: ProductsDataFake }}
      >
        <Main />
      </ProductsDataContext.Provider>
    );

    // Find the product Macbook
    const product = screen.getByText("Macbook Pro 8GB");

    // Verify if the product is contained in the main page
    expect(product).toBeInTheDocument();
  });
});

