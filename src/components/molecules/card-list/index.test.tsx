import { render, screen, fireEvent } from "@testing-library/react";
import CardList from "./index";
import { IProduct } from "../card";

const mockProducts: IProduct[] = [
  {
    id: 1,
    imageId: 1,
    isFavorite: true,
    title: "Mock Product 1",
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
  },
  {
    id: 2,
    imageId: 2,
    isFavorite: false,
    title: "Mock Product 2",
    price: 2.34,
    author: {
      firstName: "Jane",
      lastName: "Smith",
      avatar: "avatar-url-2",
      onlineStatus: "offline",
      email: "",
      gender: "",
    },
    background: "background-url-2",
    imageSrc: "image-url-2",
    createdAt: Date.now(),
    category: "Lower Body",
    theme: "Dark",
    tier: "Deluxe",
  },
];

describe("CardList Component", () => {
  test('renders "View More" button and handles click event', () => {
    const onLoadMoreMock = jest.fn();
    render(<CardList data={mockProducts} loadMoreFn={onLoadMoreMock} loading={false} isLoading={false} />);
    const button = screen.getByRole("button", { name: /View More/i });

    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(onLoadMoreMock).toHaveBeenCalled();
  });
});

