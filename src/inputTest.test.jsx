import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import InputTest from "./InputTest";

describe("InputTest", () => {

    it("calls onChange correct number of times", async () => {
        const user = userEvent.setup();

        const onChangeMock = vi.fn();

        render(<InputTest onChange={onChangeMock}/>);

        const input = screen.getByRole("textbox");

        await user.type(input, 'lion');

        expect(onChangeMock).toBeCalledTimes(4);


    });

    it("calls onChange with correct argument(s) on each input", async () => {
        const onChangeMock = vi.fn();

        const user = userEvent.setup();

        render(<InputTest onChange={onChangeMock} />);

        const input = screen.getByRole("textbox");
        
        await user.type(input, 'Ox');

        expect(onChangeMock).toHaveBeenNthCalledWith(1, 'O');
        expect(onChangeMock).toHaveBeenNthCalledWith(2, 'Ox');
    });

    it("input has correct values", async () => {
        const onChangeMock = vi.fn();

        const user = userEvent.setup();

        render(<InputTest onChange={onChangeMock}/>);

        const input = screen.getByRole("textbox");

        await user.type(input, 'Whale');

        expect(input).toHaveValue('Whale');
    });
});