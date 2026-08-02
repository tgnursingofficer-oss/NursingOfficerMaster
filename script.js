/* =================================
   NURSING OFFICER MASTER
   PREMIUM SCRIPT
   PART 1
================================= */


/* MOBILE MENU */

const menuBtn=document.getElementById("menuBtn");

const sideMenu=document.getElementById("sideMenu");


if(menuBtn && sideMenu){

menuBtn.addEventListener("click",()=>{


if(sideMenu.style.display==="none"){

sideMenu.style.display="flex";

}

else{

sideMenu.style.display="none";

}


});


}



/* SEARCH SUBJECT */

const searchBox=document.getElementById("searchBox");


if(searchBox){

searchBox.addEventListener("keyup",()=>{


let value=
searchBox.value.toLowerCase();


let cards=
document.querySelectorAll(".card");


cards.forEach(card=>{


let text=
card.innerText.toLowerCase();


if(text.includes(value)){

card.style.display="block";

}

else{

card.style.display="none";

}


});


});


}



/* DARK MODE FUNCTION */


function toggleDarkMode(){


document.body.classList.toggle("dark");


localStorage.setItem(

"darkMode",

document.body.classList.contains("dark")

);


}



/* LOAD DARK MODE */


if(localStorage.getItem("darkMode")==="true"){

document.body.classList.add("dark");

}
/* =================================
   NURSING OFFICER MASTER
   PREMIUM SCRIPT
   PART 2
================================= */


/* ===============================
   PROGRESS UPDATE
================================ */


function updateHomeProgress(){


let completed =
Number(localStorage.getItem("completedQuiz") || 0);


let correct =
Number(localStorage.getItem("totalScore") || 0);



const quizCount =
document.getElementById("quizCount");


const correctCount =
document.getElementById("correctCount");



if(quizCount){

quizCount.innerText = completed;

}



if(correctCount){

correctCount.innerText = correct;

}



const progressFill =
document.getElementById("progressFill");


const progressText =
document.getElementById("progressText");



if(progressFill){


let percentage =
Math.min(completed * 10,100);



progressFill.style.width =
percentage + "%";



if(progressText){

progressText.innerText =
percentage + "% Completed";

}


}



}



/* ===============================
   PAGE LOAD
================================ */


window.addEventListener("load",()=>{


updateHomeProgress();



});



/* ===============================
   BACK TO TOP
================================ */


const topBtn =
document.getElementById("topBtn");



if(topBtn){


window.addEventListener("scroll",()=>{


if(window.scrollY > 300){


topBtn.style.display="block";


}

else{


topBtn.style.display="none";


}


});



}



/* ===============================
   SMOOTH SCROLL
================================ */


document.querySelectorAll("a[href^='#']")
.forEach(link=>{


link.addEventListener("click",function(e){


let target =
document.querySelector(this.getAttribute("href"));



if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}



});


});
/* =================================
   NURSING OFFICER MASTER
   PREMIUM SCRIPT
   PART 3 (FINAL)
================================= */


/* ===============================
   WELCOME MESSAGE
================================ */


window.addEventListener("load",()=>{


let hero=document.querySelector(".hero");


if(hero){


hero.style.opacity="0";


setTimeout(()=>{

hero.style.transition="1s";

hero.style.opacity="1";


},200);


}



});



/* ===============================
   EXAM COUNTDOWN TIMER
================================ */


function startCountdown(examDate){


let timer=setInterval(()=>{


let now=new Date().getTime();


let distance=
new Date(examDate).getTime()-now;



if(distance<=0){


clearInterval(timer);


let box=document.getElementById("countdown");


if(box){

box.innerHTML="Exam Started";

}


return;

}



let days=
Math.floor(distance/(1000*60*60*24));


let hours=
Math.floor(
(distance%(1000*60*60*24))
/(1000*60*60)
);



let minutes=
Math.floor(
(distance%(1000*60*60))
/(1000*60)
);



let seconds=
Math.floor(
(distance%(1000*60))
/1000
);



let countdown=
document.getElementById("countdown");


if(countdown){


countdown.innerHTML=

days+" Days "+
hours+" Hours "+
minutes+" Min "+
seconds+" Sec";


}



},1000);


}



/* ===============================
   ONLINE STATUS
================================ */


function checkConnection(){


if(navigator.onLine){


console.log("Online");


}

else{


alert(
"No Internet Connection. Some features may be unavailable."
);


}


}



window.addEventListener(
"online",
checkConnection
);



window.addEventListener(
"offline",
checkConnection
);



/* ===============================
   PWA INSTALL SUPPORT
================================ */


let deferredPrompt;


window.addEventListener(
"beforeinstallprompt",
(e)=>{


e.preventDefault();


deferredPrompt=e;


const installBtn=
document.getElementById("installBtn");


if(installBtn){


installBtn.style.display="block";


installBtn.onclick=()=>{


deferredPrompt.prompt();


deferredPrompt=null;


};


}



});



/* ===============================
   PREMIUM CARD EFFECT
================================ */


document.querySelectorAll(
".card,.feature,.test-card"
)
.forEach(item=>{


item.addEventListener(
"click",
()=>{


item.style.transform=
"scale(1.03)";


setTimeout(()=>{


item.style.transform="";


},200);


});


});

