var bodyObj = document.body;

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