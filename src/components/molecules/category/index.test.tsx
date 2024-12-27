import { render, screen, fireEvent } from "@testing-library/react";
import Category, { categoryList } from "./index";

describe("Category Component", () => {
  const mockOnGetList = jest.fn();

  const setup = (props = {}) => {
    return render(<Category getListFn={mockOnGetList} {...props} />);
  };

  test("should render all category tabs correctly", () => {
    setup();

    categoryList.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });

    const defaultActiveTab = screen.getByText(categoryList[0].label);
    expect(defaultActiveTab.closest(".ant-tabs-tab-active")).toBeInTheDocument();
  });

  test("should call getListFn with the correct category key when a tab is clicked", () => {
    setup();

    const secondTab = screen.getByText(categoryList[1].label);
    fireEvent.click(secondTab);

    expect(mockOnGetList).toHaveBeenCalledWith(categoryList[1].value);
  });
});

