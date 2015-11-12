var bodyObj = document.body,
	mainObj = document.getElementsByTagName('main')[0],
	timerId = window.setTimeout(displayLogin, 5000);
		// submitBtn = document.querySelector('#loginbox input[type="submit"]'),
		// formObj = document.querySelector('#loginbox form');
		// usernameInput = document.getElementById('username'),
   		// passwordInput = document.getElementById('password');
var formMarkup =  
	'<div id ="loginbox">'+
		'<form>'+
			'<label for="username">'+
				'<span>username</span>'+
				'<input type="text" id="username">'+
				'<small></small>'+
			'</label>'+
			 '<label for="text" id="fistName">'+
	   			'<span>firstName</span>'+
	   			'<input type="text" id="fistName">'+
	   			'<small></small>'+
	   		'</label>'+
	   		'<label for="text" id="fistName">'+
	   			'<span>lastName</span>'+
	   			'<input type="text" id="lastName">'+
	   			'<small></small>'+
	   		'</label>'+
			'<label for="password">'+
				'<span>password</span>'+
				'<input type="password" id="password">'+
				'<small></small>'+
			'</label>'+
			'<input type="submit" value="submit">'+
		'</form>'+
	'</div>';


bodyObj.addEventListener('mousemove', checkDim);

 function checkDim(evt){
	var winW = window.innerWidth;
	var winH = window.innerHeight;
	var mouseX = evt.clientX;
	var mouseY = evt.clientY;

	var hue = (mouseY / winH) * 360;
	var lum = (mouseX / winW) * 100;

   bodyObj.style.backgroundColor = 'hsla('+ hue +', 50%,'+lum+'%,1)';
 	//console.log('width:' + winW +'height:'+winH+'mouseX:'+mouseX+'mouseY:'+mouseY);
}

function displayLogin(){
	clearTimeout(timerId);
	mainObj.innerHTML = formMarkup;
	var submitBtn = document.querySelector('#loginbox input[type="submit"]'),
		formObj = document.querySelector('#loginbox form');



	submitBtn.addEventListener('click', function(evt){
             evt.preventDefault();
             var els = formObj.elements,
             	 len = els.length - 1,
             	 arr = [];
             for(var i = 0; i < len; i++){
             	if(!els[i].value){
     	      		els[i].nextElementSibling.innerHTML = 'please fill in the input';
             		//this.nextElementSibling.innerHTML ='test';
             		console.log('field is empty');
             		console.log(els[i].nextElementSibling);
             	}else{
             		// els[i].nextElementSibling.innerHTML = '';
             		arr.push(els[i].value);
             	}
             	
             }
             console.log(arr);

	          //  var unVal, pwVal;
	          //  unVal = usernameInput.value;
	          //  pwVal = passwordInput.value;
	
	          // console.log(unVal+','+pwVal);
	});
}

/*
Exception: ReferenceError: submitBtn is not defined
@Scratchpad/2:17:1
*/
/*
Exception: ReferenceError: submitBtn is not defined
@Scratchpad/2:18:1
*/
/*
Exception: TypeError: submitBtn is null
@Scratchpad/2:18:1
*/
/*
Exception: TypeError: submitBtn is null
@Scratchpad/2:18:1
*/
/*
Exception: TypeError: submitBtn is null
@Scratchpad/2:19:1
*/