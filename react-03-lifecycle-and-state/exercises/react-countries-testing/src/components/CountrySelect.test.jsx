import { render, screen } from "@testing-library/react";
import CountrySelect from "./CountrySelect";
import userEvent from "@testing-library/user-event";


it("should render the list of countries", () => {
  const countries = ["Japan", "Italy"];

  render(
    <CountrySelect
      countries={countries}
      selected=""
      onChange={() => {}}
    />
  );

  // The <select> element is recognised by its role
  const selectElem = screen.getByRole("combobox");

  // Check both options are present
  expect(selectElem).toContainElement(screen.getByText("Japan"));
  expect(selectElem).toContainElement(screen.getByText("Italy"));
});


it("calls onChange with the selected country", async () => {
  // Arrange
  const countries = ["France", "Japan", "Italy"];
  const onChange = vi.fn();

  render(
    <CountrySelect
      countries={countries}
      selected=""
      onChange={onChange}
    />
  );

  // Act
  const select = screen.getByLabelText(/country/i);
  await userEvent.selectOptions(select, "Japan");

  // Assert
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledWith("Japan");
});

