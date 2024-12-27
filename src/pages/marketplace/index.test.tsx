import Marketplace from "./index";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { IProduct } from "~/components/molecules/card/index.tsx";
import useMarketplaceActions from "~/hooks/index.ts";

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

describe("Marketplace Component", () => {
  const mockUseActions = useMarketplaceActions as jest.Mock;
  beforeEach(() => {
    mockUseActions.mockReturnValue({
      data: [mockProducts],
      loading: false,
      handleLoadMore: jest.fn(),
      isLoadMore: false,
      getList: jest.fn(),
    });
  });
  test("calls getListFn when Filter is submitted", async () => {
    const { getListFn } = mockUseActions();
    render(<Marketplace />);
    fireEvent.click(screen.getByText("Search"));
    await waitFor(() => expect(getListFn).toHaveBeenCalled());
  });
  test("renders Category component", () => {
    render(<Marketplace />);
    expect(screen.getByTestId("category")).toBeInTheDocument();
  });
  test("renders Filter component", () => {
    render(<Marketplace />);
    expect(screen.getByPlaceholderText("Quick Search")).toBeInTheDocument();
  });
  test("renders CardList component", () => {
    render(<Marketplace />);
    expect(screen.getByTestId("card-list")).toBeInTheDocument();
  });
  test('calls loadMoreFn when "View More" button is clicked', async () => {
    const { loadMoreFn } = mockUseActions();
    render(<Marketplace />);
    fireEvent.click(screen.getByTestId("view-more-btn"));
    await waitFor(() => expect(loadMoreFn).toHaveBeenCalled());
  });
});

