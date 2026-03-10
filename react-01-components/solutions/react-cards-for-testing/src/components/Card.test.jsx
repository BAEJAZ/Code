import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card component", () => 
{
	it("renders its children", () => {
		render(<Card>Visible text</Card>);
		expect(screen.getByText("Visible text")).toBeInTheDocument();
	});

	it("accepts a custom colour prop without crashing", () => {
		render(<Card color='red'>Red colour</Card>);
		expect(screen.getByText("Red colour")).toBeInTheDocument();
		// Just ensures the component still renders
	});

	it("can wrap multiple child elements", () => {
		render(
			<Card>
				<h3>Header</h3>
				<p>Paragraph text</p>
			</Card>
		);
		expect(screen.getByText("Header")).toBeInTheDocument();
		expect(screen.getByText("Paragraph text")).toBeInTheDocument();
	});
});
