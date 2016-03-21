


/*==== Lbs to Kgs
========*/
var lbToKg = function(lb) {
	return lb * 2.2
}
var lb = parseInt(prompt("How many pounds to convert to kilos?"))
var kiloResult = lbToKg(lb);
alert(kiloResult.toPrecision(4) + "Kgs")

/*==== Gallons to Liters
========*/
var gallonToLiter = function(gallon) {
	return gallon / .26417
}
var gallon = parseInt(prompt("How many gallons to convert?"))
var literResult = gallonToLiter(gallon);
alert(literResult.toPrecision(4) + "L"))

/*==== Cups to Tbsp
========*/
var cupsToTbsp = function(cup) {
	return cup / .26417
}
var cup = parseInt(prompt("How many cups to convert?"))
var tbspResult = cupsToTbsp(cup);
alert(tbspResult.toPrecision(4) + "L"))
