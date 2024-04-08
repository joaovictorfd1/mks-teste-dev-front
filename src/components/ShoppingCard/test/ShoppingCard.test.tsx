import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import {
  ShoppingContext,
  ShoppingContextProps,
} from "@/useContext/shopping/useShopping";
import ShoppingCard from "../ShoppingCard";
import { ProductsDataFake } from "@/utils/mock";

describe("<ShoppingCard />", () => {
  // Simulate context data
  const simulatorContext: ShoppingContextProps = {
    buyProduct: jest.fn(),
    deleteProduct: jest.fn(),
    shopping: ProductsDataFake.products,
    setTotal: jest.fn(),
    total: { 1: Number(ProductsDataFake.products[0].price) },
  };

  it("should delete the product", async () => {
    const deleteProductMock = jest.fn();
    render(
      <ShoppingContext.Provider
        value={{ ...simulatorContext, deleteProduct: deleteProductMock }}
      >
        <ShoppingCard product={ProductsDataFake.products[0]} />
      </ShoppingContext.Provider>
    );

    // Click on the delete product button
    const deleteProduct = screen.getByTestId("deleteProduct");
    fireEvent.click(deleteProduct);

    // Check if the delete product function was called
    expect(deleteProductMock).toHaveBeenCalled();
  });

  it("should increase and decrease when clicked", () => {
    render(
      <ShoppingContext.Provider value={simulatorContext}>
        <ShoppingCard product={ProductsDataFake.products[0]} />
      </ShoppingContext.Provider>
    );

    const countElement = screen.getByTestId("count");
    const increaseButton = screen.getByTestId("addPrice");
    const decreaseButton = screen.getByTestId("subPrice");

    // Check if the counter starts at 1
    expect(countElement.textContent).toBe("1");

    // Click on the increase button and check if the counter becomes 2
    fireEvent.click(increaseButton);
    expect(countElement.textContent).toBe("2");

    // Click on the decrease button and check if the counter goes back to 1
    fireEvent.click(decreaseButton);
    expect(countElement.textContent).toBe("1");
  });
});

