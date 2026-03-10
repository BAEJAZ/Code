import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

it("should render a personalised welcome message", () => {
    // Arrange + Act
    render(<Greeting name="Geoff" isBirthday={true} />);
    
    // Assert
    const foundElement = screen.getByText(/Hello/);
    expect(foundElement).toHaveTextContent("Hello Geoff");
});

it("should not render a birthday message if it is not a birthday", () => {
    render(<Greeting name="Geoff" isBirthday={false} />);
    expect(screen.queryByText(/Birthday/)).toBeNull();
});

it("should render a happy birthday message if it is a birthday", () => {
    // Arrange + Act
    render(<Greeting name="Geoff" isBirthday={true} />);
    
    // Assert
    const foundElement = screen.getByText(/Birthday/);
    expect(foundElement).toHaveTextContent("Happy Birthday to you!");
});

it("should render 'Hello' even if no name is provided", () => {
    render(<Greeting isBirthday={false} />);
    const greetingText = screen.getByText(/Hello/);
    expect(greetingText).toHaveTextContent("Hello");
});
