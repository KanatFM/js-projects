const imgs  = document.getElementById("imgs");

const img = document.querySelectorAll("#imgs img")

let cnt = 0;

function run(){
	cnt++;
	if(cnt > img.length - 1){
		cnt = 0;
	}
	imgs.style.transform = `translateX(${-cnt*500}px)`;
	setTimeout(run, 2000)
}

run();