var reservations =[

{name:"Joshua", email:"josh@josh.com", seats:[1, 3, 4, 5]}
]

var selectedSeats = [];
var reservedSeats = [];

$(".available").click(selectSeat);
$(".selected").click(removeSeat);

function selectSeat () {
	$(this).attr("class", "seat selected");
	var number = $(this).find("p").text();
	selectedSeats.push(number);

	$(this).unbind("click", selectSeat);
  	$(this).bind("click",removeSeat);
}

function removeSeat () {
	$(this).attr("class", "seat available");
	var number = $(this).find("p").text();
	var position= selectedSeats.indexOf(number);
  	selectedSeats.splice(position);
  
  	$(this).bind("click", selectSeat);
  	$(this).unbind("click",removeSeat);
}
