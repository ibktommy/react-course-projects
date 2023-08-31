import { useState } from "react";

const Form = ({ createColorList }) => {
	const [color, setColor] = useState("");

	// Function to handle color-state with input values
	function handleInputsChange(e) {
		setColor(e.target.value);
	}

	// Function to handle form-submit
	function handleFormSubmit(e) {
		e.preventDefault();

    createColorList(color)
	}

	return (
		<form id="form" onSubmit={handleFormSubmit}>
			<input
				type="color"
				className="input-color"
				value={color}
				onChange={handleInputsChange}
			/>
			<input
				type="text"
				placeholder="Color value"
				className="input-text"
				style={{ borderColor: `${color}` }}
				value={color}
				onChange={handleInputsChange}
			/>
			<button
				type="submit"
				className="form-btn"
				style={{ backgroundColor: `${color}` }}
			>
				Generate Colors
			</button>
		</form>
	);
};

export default Form;
