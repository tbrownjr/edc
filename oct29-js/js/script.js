/* js goes here */

var loginBtn = document.getElementById('login'),
	loginBox = document.getElementById('loginBox'),
	username = document.getElementById('username'),
	password = document.getElementById('password'),
	hdrConfirm = document.getElementById("hdr");
	savedUsername = 'tbrownjr',
	savedPassword = 'j4v4scr1pt'; 

loginBtn.addEventListener("click",toggleLoginBox);

function toggleLoginBox(){
	loginBox.classList.toggle('active');
}

function userLogin(){
	var unValue = username.value;
	var pwValue = password.value;
	//console.log(unValue + ":" + pwValue);
	if(unValue === savedUsername && pwValue === savedPassword){
		//hdrConfirm.textContent = "you're in!!";
		toggleLoginBox();
		//window.location = "http://google.com";
		document
	}
	if(!unValue || unValue !== savedUsername){
		username.classList.add('error');
	}else{
		username.classList.remove('error');
	}
	if(!pwValue || pwValue !== savedPassword){
		password.classList.add('error');
	}else{
		password.classList.remove('error');
	}
}


//

var NameLI = document.getElementById("Name");
var addressLI = document.getElementById("address");
var cityStateZipLI = document.getElementById("cityStateZip"),
getterLI = document.getElementById("getter");

console.log( getterLI.innerHTML);

var myFirstName = "<h1>Tony</h1>",
	address = "2432 s cedar",
	myLastName = "Brown", uRcity, uRstate, uRzip;



NameLI.innerHTML = myFirstName + " " + myLastName;
addressLI.textContent = address;



function getinfo(){
	uRcity = prompt("what is you city..?"),
	uRstate = prompt("what state are you from..?"),
	uRzip = prompt("what is your zip code.?");


	if (!uRcity || !uRzip || !uRstate){
			console.log("there was a problem");
			alert("please try again");
			getinfo();
			
	}else{		
	    //alert("I live in " + uRcity +","+ uRstate +","+ uRzip + ".");
	    var isCorrect = confirm(" Is this correct? \n" + uRcity +","+ uRstate +","+ uRzip);

	    if(!isCorrect){
	    	getinfo();
	    }
	  	cityStateZipLI.textContent = uRcity+" "+ uRstate+ " " +uRzip;
	    }
	}




