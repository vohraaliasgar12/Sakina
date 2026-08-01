const startDate = new Date("January 1, 2022 00:00:00");

function updateTimer() {

const now = new Date();

const diff = now - startDate;

const days = Math.floor(diff / (1000*60*60*24));

const hours = Math.floor((diff/(1000*60*60))%24);

const minutes = Math.floor((diff/(1000*60))%60);

document.getElementById("timer").innerHTML =
days + " Days ❤️<br>" +
hours + " Hours 💖<br>" +
minutes + " Minutes 💕";

}

setInterval(updateTimer,1000);

updateTimer();

document.getElementById("loveBtn").onclick=function(){

const msg=document.getElementById("message");

msg.style.display="block";

};

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=["❤️","💕","💖","💗","💘"][Math.floor(Math.random()*5)];

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(Math.random()*3+3)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

}

setInterval(createHeart,300);
