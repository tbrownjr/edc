/* js goes here */


// write a program that prints the numbers
// from 1 to 100.
//for multiples of three, print "fizz"
//for multiples of 5, print "buzz"
//for numbers which are multiples of both 3 and 5, print "fizzbuzz"

// var loopNum = prompt(" give me a number"),
// 	isNum;

// if(!!loopNum){
// 	isNum = +loopNum;
// 	if (!isNaN(isNum)) {
// 		//console.log(isNum);
// 		for(var i = 1; i <= isNum; i++){
// 			//console.log(i);
// 			var result = "";
// 			if(i % 3 === 0){
// 				result += "fizz";
// 			}
// 			if(i % 5 === 0){
// 				result += "buzz";
// 			}
// 			console.log(result || i);
// 		}
// 	}
// }

//console.log( isNaN('tony') );

var firstNam = prompt("what is your first name");
var middelNam = prompt("what is your middle name");
var lastNam = prompt("what is your last name");

console.log( firstNam+" "+ middelNam+" "+lastNam);
alert(firstNam+" "+ middelNam+" "+lastNam);

var username = confirm("what is your username");
var password = confirm("what is your password");
var online = confirm("are you online");

if(online) {

}