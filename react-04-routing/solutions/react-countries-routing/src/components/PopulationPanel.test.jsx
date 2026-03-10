import { render, screen } from "@testing-library/react";
import PopulationPanel from "./PopulationPanel";

describe("PopulationPanel", () => {
  it("renders nothing when population is missing", () => {
    const { container } = render(<PopulationPanel population={null} country="Japan" year={2024} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("renders the country name and year", () => {
    render(<PopulationPanel population={1000000} country="Japan" year={2024} />);
    expect(screen.getByText(/Japan \(2024\)/i)).toBeInTheDocument();
  });

  it("renders the formatted population value", () => {
    render(<PopulationPanel population={1234567} country="Japan" year={2024} />);
    expect(screen.getByText(/Population: 1,234,567/)).toBeInTheDocument();
  });

// --- Unhappy paths ---

it("renders nothing if population is undefined", () => {
    const { container } = render(<PopulationPanel country="Japan" year={2024} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("handles invalid population type gracefully", () => {
    // Passing a string instead of a number shouldn't crash
    render(<PopulationPanel population="not a number" country="Japan" year={2024} />);
    expect(screen.getByText(/Population:/i)).toBeInTheDocument();
  });

});
