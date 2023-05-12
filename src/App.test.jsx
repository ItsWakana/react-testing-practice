import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

describe("App component", () => {
    it("renders magnificent monkeys", () => {
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
    });

    it("renders radical rhinos after button click", async () => {
        const user = userEvent.setup();

        render(<App />);
        const button = screen.getByRole("button", { name: "Click Me" });

        await user.click(button);

        expect(screen.getByRole("heading")).toHaveTextContent("Radical Rhinos");


    });
});
// describe("Login component", () => {
//     it("renders correct heading", () => {
//         render(<Login />)
//         expect(screen.getByRole("heading")).toHaveTextContent('Welcome to the login page');
//     });
//     it("renders correct button", () => {
//         render(<Login />)
//         //the name property on the options object of 'getByRole' allows us to specify the text content of the element we're targetting.
//         const button = screen.getByRole("button", {name: "Submit form"});
//         expect(button).toHaveClass("submit-btn");
//     });
// })
