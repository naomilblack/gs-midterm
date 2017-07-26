var reservations =[

{name:"Joshua", email:"josh@josh.com", seats:[1, 3, 4, 5]}
]

var selectedSeats = [];
var reservedSeats = [];



$(".available").click(selectSeat);


function selectSeat () {
	$(this).attr("class", "seat selected");
	var number = $(this).find("p").text();
	selectedSeats.push(number);

	console.log(number, selectedSeats, $(this).find("p") );
}