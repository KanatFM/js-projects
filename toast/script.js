const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
	if(cnt < 3){
		createNotification();
	}
});	
let cnt = 1;
function createNotification() {

    const notif = document.createElement("div");
    notif.classList.add("toast");

    notif.innerText = "This challenge is crazy!";

    container.appendChild(notif);
    cnt = cnt + 1;
    setTimeout(() => {
    	 cnt = cnt - 1;
        notif.remove();
    }, 3000);
   
}