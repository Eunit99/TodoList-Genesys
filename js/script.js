const todo = () => {
	let todoBtn = document.getElementById("add"),
		todoContainer = document.getElementById("todoContainer"),
		input = document.getElementById("input");

	todoBtn.addEventListener("click", function () {
		var newParagraph = document.createElement("p"),
			inputValue = input.value;

		if (inputValue !== "") {
			// If input is not empty, then set paragraph text
			newParagraph.innerText = inputValue;
			todoContainer.appendChild(newParagraph);

			// set input value to empty
			input.value = "";
		} else {
			input.style.border = "1px";
			input.style.borderStyle = "solid";
			input.style.borderColor = "red";
			console.log(`Input field is empty`);
		}


		// console.log(`The input value is: ${inputValue.value}`);


		// paragraph event listeners

		// On single click
		newParagraph.addEventListener("click", function () {
			newParagraph.style.textDecoration = "line-through";
		});

		newParagraph.addEventListener("dblclick", function () {
			newParagraph.style.display = "none";
			todoContainer.appendChild(newParagraph);
		});
	});
};

todo();