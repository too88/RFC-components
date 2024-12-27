import { render, screen } from "@testing-library/react";
import ProductCard, { IProduct } from "./index";

const mockProduct: IProduct = {
  id: 1,
  imageId: 1,
  isFavorite: true,
  title: "Mock Product",
  price: 1.23,
  author: {
    firstName: "John",
    lastName: "Doe",
    avatar: "avatar-url",
    onlineStatus: "online",
    email: "",
    gender: "",
  },
  background: "background-url",
  imageSrc: "image-url",
  createdAt: Date.now(),
  category: "Upper Body",
  theme: "Light",
  tier: "Premium",
};

describe("ProductCard", () => {
  test("renders product information correctly", () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText(`${mockProduct.price} ETH`)).toBeInTheDocument();
    expect(screen.getByText(`${mockProduct.author.firstName} ${mockProduct.author.lastName}`)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
  });
});

