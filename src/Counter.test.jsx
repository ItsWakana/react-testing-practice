import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter component", () => {
    it("Increments counter", async () => {
        const user = userEvent.setup();

        const { container } = render(<Counter />);

        expect(container).toMatchSnapshot();
        
        const counterHeading = screen.getByRole("heading");
        const button = screen.getByRole("button", { name: "Increment" });

        expect(counterHeading).toHaveTextContent('Count:0');

        await user.click(button);
        
        expect(counterHeading).toHaveTextContent('Count:1');

        await user.click(button);
        
        expect(counterHeading).toHaveTextContent('Count:2');

    });
});