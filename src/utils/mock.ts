// Create three fakes products for tests

import { IResponseData } from "@/interface/IResponseData";

export const ProductsDataFake: IResponseData = {
  count: 3,
  products: [
    {
      id: 1,
      name: "Iphone X",
      brand: "",
      description: "Iphone X 256GB",
      photo: "",
      price: "899",
      createdAt: "",
      updatedAt: "",
    },
    {
      id: 2,
      name: "Macbook Pro",
      brand: "",
      description: "Macbook Pro 8GB",
      photo: "",
      price: "2499",
      createdAt: "",
      updatedAt: "",
    },
    {
      id: 3,
      name: "Apple Watch Series 4",
      brand: "",
      description: "Apple Watch Series 4",
      photo: "",
      price: "399",
      createdAt: "",
      updatedAt: "",
    },
  ]
}