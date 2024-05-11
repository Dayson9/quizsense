iRender("app");

const intro = document.getElementById("intro"), s2 = document.getElementById("s2");

for (var prop in categories) {
content+= `<option value ="${prop}">${categories[prop]}</option>\n`;
}

s2.innerHTML = content;

const startQuiz = function(){
intro.style.left = "-100vw";
fetchQuiz();
}

const shuffle = (arr) =>{
let pre = "", cpy = [], len = 0;

while(true){
pre = Math.floor(Math.random()*4);
len = cpy.length;
if(!cpy.includes(arr[pre]) && len != 4){
cpy.push(arr[pre]);
}
if(len == 4){
break;
}
}

return cpy;
}


const fetchQuiz = () =>{
let url = "https://the-trivia-api.com/v2/questions?tags="+cat+","+cat+"?categories="+cat+"?difficulty="+diff, count = 0;

fetch(url).then(res => res.json()).then((d) =>{

for(data of d){
qtemp[count].question = data.question.text;
qtemp[count].correct = data.correctAnswer;
qtemp[count].options = shuffle([...data.incorrectAnswers, data.correctAnswer]);
count++;
}
console.log(qtemp[counter].correct);
quiz.question = qtemp[counter].question;
quiz.option = qtemp[counter].options; 
})
}

