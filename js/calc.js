function calculatePrice() {

	var width = document.calculator.width.value;

	var height = document.calculator.height.value;

	var total = width * height / 10000 * 35;

	total = total.toFixed(2);

	if (total<55) {
		total="55.00"
	}

	document.getElementById("outputPrice").innerHTML = total;
}