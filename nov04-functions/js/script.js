var payBtn = document.getElementById('pay'),
	mainObj = document.getElementsByTagName('main')[0];
payBtn.addEventListener('click', showForm);

function showForm(){
	var formStuff = '<form>'+
					'			<div class="names">'+
					'				<input type="text" name="first Name" placeholder="first name">'+
					'				<input type="text"name= "last Name"placeholder="last name">'+
					'			</div>'+
					'			<div class="location">'+
					'				<input type="text" name="address"'+
					'				placeholder= "address">'+
					'			</div>'+
					'			<div class="info">'+
					'				<input type="text" name="city"placeholder= "city">'+
					'				<input type="text" name="state"'+
					'				placeholder="state">'+
					'				<input type="text" name="zip"'+
					'				placeholder= "zip">'+
					'			</div>'+
					'			<div class="cc">'+
					'				<input type="text" name="cc"'+
					'				placeholder="0000">'+
					'				<input type="text" name="cc"'+
					'				placeholder="0000">'+
					'				<input type="text" name="cc"'+
					'				placeholder="0000">'+
					'				<input type="text" name="cc"'+
					'				placeholder="0000">'+
					'			</div>'+
					'			<div class="payment">'+
					'				<input type="text" name="amount"'+
					'				placeholder="Amount of payment">'+
					'			</div>'+
					'			<input type="submit">'+
					'		</form>';
	mainObj.innerHTML = formStuff;


	var formObj = document.getElementsByTagName('form')[0],
		formEls = formObj.length,
		submitBtn = formObj.querySelector('input[type="submit"]');

	submitBtn.addEventListener('click', function(evt){
		evt.preventDefault();
		getInfo();
	});
	function getInfo(){
		var formInfo,
		formArr = [];
		console.log(formEls);
		for(var i = 0; i < formEls; i++){
			formInfo = formObj.elements[i].value;
			if(!!formInfo){
				formArr.push(formInfo);
		   }
		}
		thankYou(formArr);
	}
	function thankYou(x){
		console.log(x[0]);
		alert('thanks for your money'+x[0] +' '+x[1]);
	}

}


//var headObj =document.head;
//var bodyObj = document.body;

// var bodyObj = document.getElementsByTagName("body")[0],
//     divObj = document.querySelector("main div"),
//     shipObj = document.querySelector('main div:last-child');


// bodyObj.addEventListener("keydown", function(evt){
// 	var shipX = parseInt(shipObj.style.left);
// 	var shipY = parseInt(shipObj.style.top);
// 	if(evt.keyCode === 37){
// 		shipX = shipX + 5;
// 		shipObj.style.left = shipX+'%';
// 	}else if (evt.keyCode === 39) {
// 		shipX = shipX + 5;
// 		shipObj.style.left = shipX+'%';
// 	}else if (evt.keyCode === 38){
// 		shipY = shipY - 5;
// 		shipObj.style.top = shipY + '%';
// 	}else if (evt.keyCode === 40){
// 		shipY = shipY +5;
// 		shipObj.style.top = shipY + '%';
// 	}
	
// });

// bodyObj.addEventListener("click", function(evt){
// 	var mouseX = evt.x,
// 	    mouseY = evt.y;
// 	    moveBall(mouseX, mouseY);
// 	    moveShip(mouseX, mouseY);
// });

// function moveShip(x){
// 	console.log(x);
// }

// function moveBall(x, y){
// 	divObj.style.left = x+"px";
// 	divObj.style.top = y+"px";
// 	divObj.style.backgroundColor = 'hsla('+(x+y)+', 50%, 50%, 1)';
// 	//divObj.children[0].textContent = (x+y);
// }

// function makeShip(){
// 	var shipW = '100px',
// 		shipH = '25px',
// 		shipClr = 'red',
// 		shipX = '50%',
// 		shipY = '75%',
// 		shipPos = 'absolute',
// 		shipTrans = "translate3d(-50%, -50%, 0)",
// 		shipSlide = "all 500ms ease-in-out";

// 		shipObj.style.width = shipW;
// 	    shipObj.style.height = shipH;
// 	    shipObj.style.backgroundColor = shipClr;
// 	    shipObj.style.left = shipX;
// 	    shipObj.style.top = shipY;
// 	    shipObj.style.position = shipPos;
// 	    shipObj.style.transform = shipTrans;
// 	    shipObj.style.transition = shipSlide;
// }
// makeShip();
// function makeball(){
// 	var ballW = "50px",
// 	    ballH = "50px",
// 	    ballClr = "red",
// 	    ballRadi = "100%",
// 	    ballX = "100px", 
// 	    ballY = "100px",
// 	    ballPos = "absolute",
// 	    ballTrans = "translate3d(-100%, -90%, 1)",
// 	    ballSlide = "all 5000ms ease-in-out";

// 	    divObj.style.width = ballW;
// 	    divObj.style.height = ballH;
// 	    divObj.style.backgroundColor = ballClr;
// 	    divObj.style.borderRadius = ballRadi;
// 	    divObj.style.left = ballX;
// 	    divObj.style.top = ballY;
// 	    divObj.style.position = ballPos;
// 	    divObj.style.transform = ballTrans;
// 	    divObj.style.transition = ballSlide;


// }

// makeball();