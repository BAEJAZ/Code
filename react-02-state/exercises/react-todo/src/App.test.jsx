import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => 
{
	test("renders the main heading", () => 
	{
		render(<App />);
		expect(screen.getByText("My To-Do List")).toBeInTheDocument();
	});
});
