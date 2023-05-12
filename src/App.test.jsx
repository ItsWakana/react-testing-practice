import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Login from "./Login";

describe("Login component", () => {
    it("renders correct heading", () => {
        render(<Login />)
        expect(screen.getByRole("heading")).toHaveTextContent('Welcome to the login page');
    });
    it("renders correct button", () => {
        render(<Login />)
        const button = screen.getByRole("button");
        expect(button).toHaveClass("submit-btn");
        expect(button).toHaveTextContent("Submit form");
    });
})
