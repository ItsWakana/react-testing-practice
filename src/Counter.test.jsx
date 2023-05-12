import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter component", () => {
    it("Increments counter", async () => {
        const user = userEvent.setup();
        let count = 0;

        const { container } = render(<Counter />);

        expect(container).toMatchSnapshot();
        
        const counterHeading = screen.getByRole("heading");
        const button = screen.getByRole("button", { name: "Increment" });

        expect(counterHeading).toHaveTextContent(`Count:${count}`);

        await user.click(button);
        count++;
        expect(counterHeading).toHaveTextContent(`Count:${count}`);

    });
});