function createHeart(){
	const heart = document.createElement('div');
	heart.classList.add('heart');
	heart.innerText = '💜';
	heart.style.left = Math.random()*100 + "vw";
	heart.style.animationDuration = Math.random()*2+3+"s";
	document.body.appendChild(heart);
}

setInterval(createHeart,300);

function createHeart1(){
	const heart = document.createElement('div');
	heart.classList.add('heart');
	heart.innerText = 'K';
	heart.style.left = Math.random()*100 + "vw";
	heart.style.animationDuration = Math.random()*2+3+"s";
	document.body.appendChild(heart);
}

setInterval(createHeart1,300);