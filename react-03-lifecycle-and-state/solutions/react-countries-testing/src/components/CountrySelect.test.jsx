import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CountrySelect from "./CountrySelect";

describe("CountrySelect", () => {
  it("renders all country options", () => {
    const countries = ["Japan", "Italy", "France"];

    render(<CountrySelect countries={countries} selected="" onChange={() => {}} />);

    expect(screen.getByRole("option", { name: "Select a country" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Japan" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Italy" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "France" })).toBeInTheDocument();
  });

  it("shows the correct selected value", () => {
    const countries = ["Japan", "Italy", "France"];

    render(<CountrySelect countries={countries} selected="Italy" onChange={() => {}} />);

    const select = screen.getByLabelText(/country/i);
    expect(select).toHaveValue("Italy");
  });

  it("calls onChange when a new country is selected", async () => {
    const countries = ["Japan", "Italy", "France"];
    const onChange = vi.fn();

    render(<CountrySelect countries={countries} selected="" onChange={onChange} />);

    const select = screen.getByLabelText(/country/i);
    await userEvent.selectOptions(select, "France");

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("France");
  });

    // --- Unhappy paths ---

    it("renders safely when given an empty list of countries", () => {
      render(<CountrySelect countries={[]} selected="" onChange={() => {}} />);
      expect(screen.getByRole("option", { name: "Select a country" })).toBeInTheDocument();
    });
  
    it("renders safely even if onChange is undefined", () => {
      const countries = ["Japan", "France"];
      expect(() => {
        render(<CountrySelect countries={countries} selected="" />);
      }).not.toThrow();
      //The component should render without crashing — even if no onChange is passed
    });

});
