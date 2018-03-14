
function addZero(number) {
	if (number < 10) {
		number = "0" + number;
	}
	return number;
}

function fixMonth(number) {
	if (number >= 0 ) {
		number = 1 + number;
	}
	return number;
}

function getTime() {
	var current_date = new Date();
	var year = current_date.getFullYear();
	var month = fixMonth(current_date.getMonth());
	var date = current_date.getDate();
	var hour = current_date.getHours();
	var minute = addZero(current_date.getMinutes());
	var second = addZero(current_date.getSeconds());


	document.getElementById("year").innerHTML = year;
	document.getElementById("month").innerHTML = month;
	document.getElementById("date").innerHTML = date;		
	document.getElementById("hour").innerHTML = hour;
	document.getElementById("minute").innerHTML = minute;
	document.getElementById("second").innerHTML = second;

}

setInterval(getTime, 1000)
