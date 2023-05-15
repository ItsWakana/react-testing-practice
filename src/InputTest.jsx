import React from "react";

const InputTest = ({ onChange: inputChange }) => {

    const handleInputChange = (event) => inputChange(event.target.value);

    return (
        <input type="text" onChange={handleInputChange}></input>
    )
}

export default InputTest;