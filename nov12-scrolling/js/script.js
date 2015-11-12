


(function(){

	window.addEventListener('scroll', scrollFunc);

	function scrollFunc(evt){
		fixedNav();

	}


	var bodyObj = document.body,
		headObj = document.getElementsByTagName('header')[0],
		mainObj = document.getElementsByTagName('main')[0];

	/**
	 * function fetches css applied styles.
	 *  obj needs to be a js object
	 *  prop needs to be a css property
	 */
	function getStyle(obj, prop){
		return parseInt(window.getComputedStyle(obj, null).getPropertyValue(prop));
	}

	/**
	 * function coverting px to vw / vw to px.
	 *  num needs to be an interger
	 *  
	 */

	function calcUnit(num){
		return (document.documentElement.clientWidth / num); 
	}



	function fixedNav(scroll){
		var scrollDis = window.scrollY;

		if(scrollDis > getStyle(bodyObj,'padding-top')){
			headObj.classList.add('fixie');
			mainObj.style.paddingTop = (calcUnit(10) + headObj.clientHeight) + 'px';

		}else{
			headObj.classList.remove('fixie');
			mainObj.style.paddingTop = '10vw';
		}
	}

	console.log(document.documentElement.clientHeight);
	console.log(document.documentElement.scrollHeight);
	function colorChange(){
		var cH = document.documentElement.clientHeight;
		var sH = document.documentElement.scrollHeight;
		console.log(  Math.round(sH / cH) );
	}
	colorChange();

})();





