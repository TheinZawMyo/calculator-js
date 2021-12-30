let input = document.getElementById("input");
let numbers = document.querySelectorAll(".numbers div");
let operators = document.querySelectorAll(".operators div");
let clear = document.getElementById("clear");
let result = document.getElementById("result");
let display = false;

document.onkeydown = () => {
	return false;
};

numbers.forEach((number) => {
	number.addEventListener("click", (e) => {
		let currentInput = input.value;
		let lastChar = currentInput[currentInput.length - 1];
		if (number.innerHTML !== "=" && number.innerHTML !== "C") {
			input.value += e.target.innerHTML;
		}
	});
});

operators.forEach((operator) => {
	operator.addEventListener("click", (e) => {
		let currentString = input.value;
		let lastChar = currentString[currentString.length - 1];

		if (
			lastChar === "+" ||
			lastChar === "-" ||
			lastChar === "*" ||
			lastChar === "/"
		) {
			let newString =
				currentString.substring(0, currentString.length - 1) +
				e.target.innerHTML;
			input.value = newString;
		} else if (currentString.length == 0) {
			alert("Please enter a number first!");
		} else {
			input.value += e.target.innerHTML;
		}
	});
});

result.addEventListener("click", () => {
	let currentInput = input.value;
	let calculate = eval(currentInput);
	input.value = calculate;
});

clear.addEventListener("click", () => {
	input.value = "";
});

//====== Dark mode ====//
let darkmode = localStorage.getItem("Cal_Dark");
const darkModeToggle = document.querySelector("#theme_btn");

const enableDarkMode = () => {
	document.body.classList.add("dark-theme");
	localStorage.setItem("Cal_Dark", "enabled");
};

const disableDarkMode = () => {
	document.body.classList.remove("dark-theme");
	localStorage.setItem("Cal_Dark", null);
};

if (darkmode === "enabled") {
	enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
	let darkmode = localStorage.getItem("Cal_Dark");
	if (darkmode !== "enabled") {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
});
