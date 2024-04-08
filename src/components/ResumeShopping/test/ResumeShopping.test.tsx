import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ResumeShopping from "../ResumeShopping";
import {
  ShoppingContext,
  ShoppingContextProps,
} from "@/useContext/shopping/useShopping";
import { ProductsDataFake } from "@/utils/mock";

describe("<ResumeShopping />", () => {
  const closeShopping = jest.fn();
  // Simulate context data
  const simulatorContext: ShoppingContextProps = {
    buyProduct: jest.fn(),
    deleteProduct: jest.fn(),
    shopping: ProductsDataFake.products,
    setTotal: jest.fn(),
    total: { 1: Number(ProductsDataFake.products[0].price) },
  };

  it("should render correctly", () => {
    render(<ResumeShopping closeShopping={closeShopping} />);

    // Find the text
    const title = screen.getByText("Carrinho de compras");

    // Check if the text is on the screen
    expect(title).toBeInTheDocument();
  });

  it("should close ResumeShopping", () => {
    render(<ResumeShopping closeShopping={closeShopping} />);

    // Click on the close shopping button
    const closeButton = screen.getByText("X");
    fireEvent.click(closeButton);

    // Check if the close shopping function was called
    expect(closeShopping).toHaveBeenCalledTimes(1);
  });

  it("should render the products", () => {
    render(
      <ShoppingContext.Provider value={simulatorContext}>
        <ResumeShopping closeShopping={closeShopping} />
      </ShoppingContext.Provider>
    );

    // Find the name of the product in the context
    const product = screen.getByText("Macbook Pro");

    // Check if the product name is being displayed on the screen
    expect(product).toBeInTheDocument();
  });
});

