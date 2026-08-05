// ============================================
// NURSING OFFICER MASTER
// PREMIUM QUIZ ENGINE
// FINAL VERSION - PART 1
// ============================================

let currentQuiz = [];
let currentSubject = "";
let currentIndex = 0;
let score = 0;
let answered = false;


// ============================================
// SUBJECT DATABASE
// ============================================

const quizDatabase = {

anatomy:
typeof anatomyQuiz !== "undefined" ? anatomyQuiz : [],

physiology:
typeof physiologyQuiz !== "undefined" ? physiologyQuiz : [],

biochemistry:
typeof biochemistryQuiz !== "undefined" ? biochemistryQuiz : [],

microbiology:
typeof microbiologyQuiz !== "undefined" ? microbiologyQuiz : [],

pathology:
typeof pathologyQuiz !== "undefined" ? pathologyQuiz : [],

pharmacology:
typeof pharmacologyQuiz !== "undefined" ? pharmacologyQuiz : [],

fundamentals:
typeof fundamentalsQuiz !== "undefined" ? fundamentalsQuiz : [],

"medical-surgical-1":
typeof medicalSurgical1Quiz !== "undefined" ? medicalSurgical1Quiz : [],

"medical-surgical-2":
typeof medicalSurgical2Quiz !== "undefined" ? medicalSurgical2Quiz : [],

"child-health":
typeof childHealthQuiz !== "undefined" ? childHealthQuiz : [],

"mental-health":
typeof mentalHealthQuiz !== "undefined" ? mentalHealthQuiz : [],

obg:
typeof obgQuiz !== "undefined" ? obgQuiz : [],

"community-health":
typeof communityHealthQuiz !== "undefined" ? communityHealthQuiz : [],

"nursing-research":
typeof nursingResearchQuiz !== "undefined" ? nursingResearchQuiz : [],

"nursing-administration":
typeof nursingAdministrationQuiz !== "undefined" ? nursingAdministrationQuiz : [],

"nursing-education":
typeof nursingEducationQuiz !== "undefined" ? nursingEducationQuiz : [],

nutrition:
typeof nutritionQuiz !== "undefined" ? nutritionQuiz : [],

psychology:
typeof psychologyQuiz !== "undefined" ? psychologyQuiz : [],

sociology:
typeof sociologyQuiz !== "undefined" ? sociologyQuiz : [],

"first-aid":
typeof firstAidQuiz !== "undefined" ? firstAidQuiz : [],

"national-health-programs":
typeof nationalHealthProgramsQuiz !== "undefined" ? nationalHealthProgramsQuiz : []

};



// ============================================
// START QUIZ
// ============================================

function startQuiz(){

let subject =
document.getElementById("subjectSelect").value;


if(subject===""){

alert("Please select a subject");

return;

}


if(!quizDatabase[subject] ||
quizDatabase[subject].length===0){

alert("Questions not available for this subject.");

return;

}



currentSubject = subject;


// Copy + Shuffle Questions

currentQuiz =
[...quizDatabase[subject]]
.sort(()=>Math.random()-0.5);



currentIndex = 0;

score = 0;

answered = false;


showQuestion();

}



// ============================================
// SHOW QUESTION
// ============================================


function showQuestion(){


answered = false;


const q =
currentQuiz[currentIndex];


const quizBox =
document.getElementById("quizBox");


const letters =
["A","B","C","D"];



quizBox.innerHTML = `


<div class="question-box">


<div class="question-number">

Question ${currentIndex + 1} / ${currentQuiz.length}

</div>



<h3>

${q.question}

</h3>



<div class="options">


${q.options.map((option,index)=>`


<button class="option"
onclick="checkAnswer(${JSON.stringify(option)})">


<span>

${letters[index]}

</span>


${option}


</button>


`).join("")}



</div>


<div id="explanation"></div>


</div>


`;

}
// ============================================
// NURSING OFFICER MASTER
// PREMIUM QUIZ ENGINE
// FINAL VERSION - PART 2
// ============================================


// ============================================
// CHECK ANSWER
// ============================================


function checkAnswer(selected){


if(answered){

return;

}

answered = true;


const q =
currentQuiz[currentIndex];


const buttons =
document.querySelectorAll(".option");



buttons.forEach(btn=>{


btn.disabled = true;


let optionText =
btn.innerText
.replace(/^[A-D]\s*/,"")
.trim();



if(optionText === q.answer){


btn.classList.add("correct");


btn.innerHTML =
`
<span>✔</span>
${optionText}
`;


}



if(optionText === selected &&
selected !== q.answer){


btn.classList.add("wrong");


btn.innerHTML =
`
<span>✖</span>
${optionText}
`;


}


});



if(selected === q.answer){

score++;

}



// ============================================
// RATIONALIZATION DISPLAY
// ============================================


document.getElementById("explanation").innerHTML = `


<div class="rational-box">


<h2>
💡 Rationalization
</h2>



<div class="meaning-box">


<h3>
📖 Question Meaning
</h3>


<p>

${q.meaning ||
"Read the question carefully and understand the concept."}

</p>


</div>





<div class="answer-box">


<h3>
✅ Correct Answer
</h3>


<p class="answer-text">

${q.answer}

</p>


</div>





<div class="explanation-box">


<h3>
🩺 Explanation
</h3>


<p>

${q.rationalization ||
"No explanation available."}

</p>


</div>





<div class="next-container">


<button

class="next-btn"

onclick="nextQuestion()"

>

Next Question ➜

</button>


</div>



</div>


`;

}




// ============================================
// NEXT QUESTION
// ============================================


function nextQuestion(){



currentIndex++;



if(currentIndex < currentQuiz.length){


showQuestion();


}

else{


showResult();


}



}
// ============================================
// NURSING OFFICER MASTER
// PREMIUM QUIZ ENGINE
// FINAL VERSION - PART 3 (FINAL)
// ============================================


// ============================================
// RESULT PAGE
// ============================================


function showResult(){


const quizBox =
document.getElementById("quizBox");



let percentage =
Math.round(
(score / currentQuiz.length) * 100
);



let grade = "C";



if(percentage >= 90){

grade = "A+";

}

else if(percentage >= 75){

grade = "A";

}

else if(percentage >= 60){

grade = "B";

}




quizBox.innerHTML = `


<div class="result-card">


<h1>

🎉 Quiz Completed

</h1>



<h2>

Your Score

</h2>



<div class="score-text">

${score} / ${currentQuiz.length}

</div>



<h3>

Percentage : ${percentage}%

</h3>



<h3>

Grade : ${grade}

</h3>



<button

class="btn"

onclick="restartQuiz()"

>

🔄 Restart Quiz

</button>



<button

class="btn"

onclick="startQuiz()"

>

📚 New Quiz

</button>



</div>


`;



saveProgress();


}




// ============================================
// RESTART QUIZ
// ============================================


function restartQuiz(){


currentIndex = 0;

score = 0;

answered = false;



currentQuiz =
[...currentQuiz]
.sort(()=>Math.random()-0.5);



showQuestion();


}




// ============================================
// SAVE PROGRESS
// ============================================


function saveProgress(){



let key =
"quizCompleted_" + currentSubject;



let completed =
Number(
localStorage.getItem("completedQuiz") || 0
);



let totalScore =
Number(
localStorage.getItem("totalScore") || 0
);



// Prevent duplicate saving

if(!localStorage.getItem(key)){


localStorage.setItem(
key,
"true"
);



localStorage.setItem(
"completedQuiz",
completed + 1
);



localStorage.setItem(
"totalScore",
totalScore + score
);


}



updateProgress();


}




// ============================================
// UPDATE PROGRESS DISPLAY
// ============================================


function updateProgress(){



let quizCount =
document.getElementById("quizCount");



let correctCount =
document.getElementById("correctCount");



if(quizCount){


quizCount.innerText =
localStorage.getItem("completedQuiz") || 0;


}



if(correctCount){


correctCount.innerText =
localStorage.getItem("totalScore") || 0;


}




let progressFill =
document.getElementById("progressFill");



let progressText =
document.getElementById("progressText");




if(progressFill){



let value = Math.min(

Number(
localStorage.getItem("completedQuiz") || 0
) * 10,

100

);



progressFill.style.width =
value + "%";



if(progressText){


progressText.innerText =
value + "% Completed";


}


}



}



// ============================================
// LOAD SAVED DATA
// ============================================


window.addEventListener(

"load",

()=>{


updateProgress();


}

);
