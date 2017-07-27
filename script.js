var reservations =[]
var selectedSeats = [];
var reservedSeats = [];

$(".available").click(selectSeat);
$(".selected").click(removeSeat);

function selectSeat() {
	$(this).attr("class", "seat selected");
	var number = $(this).find("p").text();
	selectedSeats.push(number);

	$(this).unbind("click", selectSeat);
  	$(this).bind("click",removeSeat);
}

function removeSeat() {
	$(this).attr("class", "seat available");
	var number = $(this).find("p").text();
	var position= selectedSeats.indexOf(number);
  	selectedSeats.splice(position);
  
  	$(this).bind("click", selectSeat);
  	$(this).unbind("click",removeSeat);
}

$("#start-form").click(showForm);

function showForm() {

	selectedSeats.forEach(function (seat) {
		$("#selections").append(seat + " ");
	});

	$("#form-row").fadeIn();
	$("#seats-row").hide();
}

function hideForm() {
	$("#form-row").hide();
	$("#seats-row").fadeIn();
}

$("#final-form").click(finalizeRes);

function finalizeRes() {

	var resName = $("#final-form").find("[name ='name']").val();
	var resEmail = $("#final-form").find("[name ='email']").val();
	var reservation = {name: resName, email: resEmail, seats: selectedSeats};
	reservations.push(reservation);

	selectedSeats = [];
	//Add here: The code to change the selected items to reserved, and to remove all event listeners. 
}