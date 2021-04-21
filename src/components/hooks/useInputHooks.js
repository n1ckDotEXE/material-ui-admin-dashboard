import { useState } from "react";
import { matches } from "validator";

function useInputHooks() {
	const [input, setInput] = useState("");
	const [inputError, setInputError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	function handleInputOnChange(e) {
		let inputValue = e.target.value;
		let inputName = e.target.name;

		console.log(`${inputName}: ${inputValue}`);

		setInput(inputValue);

		if (matches(inputValue, /[!@#$%^&*()\[\],.?":;{}|<>]/g)) {
			setInputError(true);
			setErrorMessage(`${inputName} cannot have any special characters`);
		} else {
			setInputError(false);
			setErrorMessage("");
		}
	}

	return [input, handleInputOnChange, inputError, errorMessage];
}
export default useInputHooks;
