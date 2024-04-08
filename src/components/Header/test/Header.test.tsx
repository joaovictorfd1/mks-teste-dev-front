import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../Header";

describe("Header", () => {
  it("should render correctly", () => {
    render(<Header />);

    const logoMKS = screen.getByText("MKS");

    expect(logoMKS).toBeInTheDocument();
  });

  it("should opened ResumeShopping", async () => {
    render(<Header />);

    // Clica no icoone para abrir o carrinho de compras
    const cartButton = screen.getByAltText("shopping cart");
    userEvent.click(cartButton);

    // Verifica se o texto está sendo exibido
    const text = await screen.findByText("Seu carrinho está vazio.")

    expect(text).toBeInTheDocument();
  });
});
