const container = document.querySelector(".container");
const submitButton = document.querySelector(".button");
const giveRating = document.querySelector(".first");
const thanksForRating = document.querySelector(".second");
let selectedRating = "";
const submittedRating = document.querySelector(
	".rating-submitted"
);

// Set up the click event listener for the ratings
container.addEventListener("click", function (event) {
	const clickedRating = event.target;
	if (
		clickedRating.classList.contains("rate" && "active")
	) {
		clickedRating.classList.remove("active");
	} else if (clickedRating.classList.contains("rate")) {
		document
			.querySelectorAll(".rate")
			.forEach(function (rating) {
				rating.classList.remove("active");
			});
		clickedRating.classList.add("active");
		selectedRating = clickedRating.textContent;
	}
});

// Set up the click event listener for the submit button
if (submitButton) {
	submitButton.addEventListener("click", function () {
		if (selectedRating == "") {
			alert("please choose raiting.");
		} else {
			giveRating.style.display = "none";
			thanksForRating.style.display = "flex";

			submittedRating.innerHTML = `You selected ${selectedRating} out of 5`;
		}
	});
}
