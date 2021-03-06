$(document).ready(function () {
	$(".container").delay(70).fadeIn();
});

var reservations = [] //Array of objects that hold reservation information
var selectedSeats = []; // Array of currently selected seats. Erased after every reservation.
var reservedSeats = [];// Every reserved seat, updated after every reservation.

$(".available").click(selectSeat);
$(".selected").click(removeSeat);
$("#final-button").click(finalizeRes);
$("#start-form").click(showForm);
$(".form-close").click(hideForm);

function selectSeat() { // Select an available seat.
	if (selectedSeats.length === 0) { // If a seat is already selected, do nothing.
  		$("#start-form").show();
	}

	$(this).attr("class", "seat selected");
	var number = $(this).find("p").text();
	selectedSeats.push(number);

	$(this).unbind("click", selectSeat);
  	$(this).bind("click",removeSeat);

}

function removeSeat() { // Remove a selected seat.
	$(this).attr("class", "seat available");
	var number = $(this).find("p").text(); //Seat number, as a string.
	var position= selectedSeats.indexOf(number);
  	selectedSeats.splice(position); // Remove seat to be unselected from the array.
  
  	$(this).bind("click", selectSeat);//Remove and add appropriate event listeners.
  	$(this).unbind("click",removeSeat);

  	if (selectedSeats.length === 0) {
  		$("#start-form").hide();
	} 
}

function showForm() { // Hide seat display and show the reservation form.

	$("#selections").text('');

	selectedSeats.forEach(function (seat) {
		$("#selections").append(seat + " ");
	});

	$("#form-row").fadeIn();
	$("#seats-row").hide();
}

function hideForm() { // Show seat display and hide the reservation form.
	$("#form-row").hide();
	$("#seats-row").fadeIn();
}

function finalizeRes() { // Finalize the reservation

	var resName = $("#final-form").find("[name ='name']").val(); // Get form values and add them to an object
	var resEmail = $("#final-form").find("[name ='email']").val();

	if (resName.length !== 0 && resName.length !== 0) {

		console.log("You dun goofed.");
		var reservation = {name: resName, email: resEmail, seats: selectedSeats};
		reservations.push(reservation);

		selectedSeats.forEach(function (seat) { //Push each selected seat into reservedSeats and clear the selectedSeats array.
			reservedSeats.push(seat);
		});
		console.log(reservations);
		selectedSeats = [];

		$(".selected").unbind("click", removeSeat).attr("class", "seat reserved");// Change class to rserved, remove event listeners.
		hideForm();
	} else {
		$("#error").text("You must enter a name AND email to continue!!");
	}
}



