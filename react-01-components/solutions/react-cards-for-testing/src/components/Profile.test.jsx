import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Profile from "./Profile";

describe("Profile component", () => 
{
	it("renders name, role, and avatar", () => {
		render(
			<Profile
				name='Will Robinson'
				role='Tech Trainer'
				avatar='avatar.png'
			/>
		);
		expect(screen.getByText("Will Robinson")).toBeInTheDocument();
		expect(screen.getByText("Tech Trainer")).toBeInTheDocument();
		expect(screen.getByRole("img")).toHaveAttribute("src", "avatar.png");
	});

	it("renders a note when provided", () => {
		render(<Profile name='Will' role='Trainer' note='Loves React' />);
		expect(screen.getByText(/Loves React/i)).toBeInTheDocument();
	});

	it("does not render a note if none is provided", () => {
		render(<Profile name='Will' role='Trainer' />);
		expect(screen.queryByText(/Loves React/i)).toBeNull();
	});
});
