iRender("app");

const intro = document.getElementById("intro"), s2 = document.getElementById("s2"), r_option = document.querySelectorAll(".option");

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

question.value = qtemp[counter.value].question;
option[0] = qtemp[counter.value].options[0];
option[1] = qtemp[counter.value].options[1];
option[2] = qtemp[counter.value].options[2];
option[3] = qtemp[counter.value].options[3];
})
}

window.onload = function() {
for (var prop in categories) {
content+= `<option value ="${prop}">${categories[prop]}</option>\n`;
}

s2.innerHTML = content;
s2.value = "general_knowledge";

const pushOpt = (c) =>{
let span = r_option[c].querySelectorAll("span")[1];

r_option[c].addEventListener("click", function() {
selected.push({el: r_option[c], option: span.innerText});
console.log(selected);
});
}

var i = 0, len = r_option.length;

for (i = 0; i < len; i++) {
pushOpt(i);
}
}

document.body.ondblclick = function() {
if(10 > counter.value+1){
counter.value++;
}

question.value = qtemp[counter.value].question;
option[0] = qtemp[counter.value].options[0];
option[1] = qtemp[counter.value].options[1];
option[2] = qtemp[counter.value].options[2];
option[3] = qtemp[counter.value].options[3];
}
