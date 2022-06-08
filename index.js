let input = "turpentine and turtles";

const vowels = ["a", "e", "i", "o", "u"];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
	// console.log(`${input[i]} is ` + i);
	if (input[i] === "e") {
		resultArray.push(input[i]);
	} else if (input[i] === "u") {
		resultArray.push(input[i]);
	}
	for (let j = 0; j < vowels.length; j++) {
		if (input[i] === vowels[j]) {
			// console.log(vowels[j])
			resultArray.push(vowels[j]);
		}
	}
}

console.log(resultArray.join("").toUpperCase());
