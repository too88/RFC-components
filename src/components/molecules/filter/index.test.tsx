import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchComponent from "./index";
import { Form } from "antd";
const mockOnGetList = jest.fn();

describe("SearchComponent", () => {
  let mockResetFields: jest.SpyInstance;

  afterEach(() => {
    jest.clearAllMocks();
  });

  const FilterComponent = () => {
    const [form] = Form.useForm();
    mockResetFields = jest.spyOn(form, "resetFields");
    return <SearchComponent form={form} getListFn={mockOnGetList} />;
  };

  test("renders filter...", () => {
    render(<FilterComponent />);
    expect(screen.getByPlaceholderText("Quick Search")).toBeInTheDocument();
    expect(screen.getByLabelText("price")).toBeInTheDocument();
    expect(screen.getByLabelText("tier")).toBeInTheDocument();
    expect(screen.getByLabelText("theme")).toBeInTheDocument();
    expect(screen.getByLabelText("price")).toBeInTheDocument();
    expect(screen.getByText("Reset Filter")).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
  });

  test("should call getListFn when the form is submitted", async () => {
    render(<FilterComponent />);
    const submitButton = screen.getByText("Search");
    fireEvent.click(submitButton);
    await waitFor(() => expect(mockOnGetList).toHaveBeenCalledTimes(1));
  });

  test("should trigger form.resetFields and getListFn when click Reset Filter button", async () => {
    render(<FilterComponent />);
    fireEvent.click(screen.getByText("Reset Filter"));
    expect(mockResetFields).toHaveBeenCalledTimes(1);
    expect(mockOnGetList).toHaveBeenCalledTimes(1);
  });
});

