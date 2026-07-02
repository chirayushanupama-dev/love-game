const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

function moveButton(){

const maxX = window.innerWidth - noBtn.offsetWidth - 20;

const maxY = window.innerHeight - noBtn.offsetHeight - 20;

const randomX = Math.random() * maxX;

const randomY = Math.random() * maxY;

noBtn.style.left = randomX + "px";
noBtn.style.top = randomY + "px";

}

noBtn.addEventListener("mouseover", moveButton);

noBtn.addEventListener("touchstart",(e)=>{

e.preventDefault();

moveButton();

});

yesBtn.addEventListener("click",()=>{

document.body.innerHTML=`

<div style="height:100vh;
display:flex;
justify-content:center;
align-items:center;
background:linear-gradient(135deg,#ff758c,#ff7eb3);
color:white;
font-size:45px;
font-family:Arial;
text-align:center;
padding:20px;">

<div>

<h1>❤️ Yayyyyy!! ❤️</h1>

<h2>Love You Forever 💖</h2>

<p>Thanks for saying YES! 🥰</p>

</div>

</div>

`;

});
