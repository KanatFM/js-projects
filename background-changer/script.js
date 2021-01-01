const btn = document.getElementById("btn");



	
	
function randomBg(){
	document.body.style.background = `hsl(${Math.floor(Math.random()*360)}, 100%, 50%`;
}
setInterval(randomBg,300);
