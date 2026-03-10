import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import YearSelect from "./YearSelect";

describe("YearSelect", () => {
  it("renders all expected year options", () => {
    render(<YearSelect year="" onChange={() => {}} />);
    const options = screen.getAllByRole("option");
    expect(options.length).toBe(12); // 1 placeholder + 11 years
    expect(screen.getByRole("option", { name: "Select a year" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "2020" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "2030" })).toBeInTheDocument();
  });

  it("shows the correct selected year", () => {
    render(<YearSelect year="2025" onChange={() => {}} />);
    const select = screen.getByRole("combobox");
    expect(select).toHaveValue("2025");
  });

  it("calls onChange when a new year is selected", async () => {
    const onChange = vi.fn();
    render(<YearSelect year="" onChange={onChange} />);
    const select = screen.getByRole("combobox");
    await userEvent.selectOptions(select, "2027");
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("2027");
  });

  // --- Unhappy paths below ---

  it("renders placeholder when no year is provided", () => {
    render(<YearSelect year="" onChange={() => {}} />);
    expect(screen.getByRole("combobox")).toHaveValue("");
    expect(screen.getByRole("option", { name: "Select a year" })).toBeInTheDocument();
  });

  it("handles invalid selected value gracefully", () => {
    render(<YearSelect year="9999" onChange={() => {}} />);
    const select = screen.getByRole("combobox");
    // It should render safely, even though 9999 is not a valid option
    expect(select).toBeInTheDocument();
    expect(select).toHaveValue("");
  });

  it("does not call onChange when selecting the same value", async () => {
    const onChange = vi.fn();
    render(<YearSelect year="2025" onChange={onChange} />);
    const select = screen.getByRole("combobox");
    await userEvent.selectOptions(select, "2025");
    expect(onChange).not.toHaveBeenCalled();
  });

// 1 of these unhappy paths faile, showing we need to edit our code 
// Add functionality to handle in eventHandler (commented in file)

});
