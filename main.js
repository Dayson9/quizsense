iRender("app");

const intro = document.getElementById("intro"),
  s2 = document.getElementById("s2"),
  r_option = document.querySelectorAll(".option"),
  percent = document.getElementById("percentage"),
  ctx = percent.getContext("2d");

const drawPercent = function(angle) {
  let width = percent.width,
    height = percent.height,
    radius = 50;
  ctx.beginPath();

  ctx.arc((width / 2) - 0.5, (height / 2) - 0.5, radius, 0, ((angle) * (Math.PI / 180)), false);
  ctx.strokeStyle = "#08F372";
  ctx.lineWidth = "10";
  ctx.lineCap = "round";
  ctx.stroke();
}

drawPercent(360);

const startQuiz = function() {
  intro.style.left = "-100vw";
  fetchQuiz();
}

const shuffle = (arr) => {
  let pre = "",
    cpy = [],
    len = 0;

  while (true) {
    pre = Math.floor(Math.random() * 4);
    len = cpy.length;
    if (!cpy.includes(arr[pre]) && len != 4) {
      cpy.push(arr[pre]);
    }
    if (len == 4) {
      break;
    }
  }

  return cpy;
}

const openPref = function() {
  intro.style.left = "0vw";
}

const fetchQuiz = () => {
  let url = "https://the-trivia-api.com/v2/questions?tags=" + cat + "," + cat + "?categories=" + cat + "?difficulty=" + diff,
    count = 0;

  fetch(url).then(res => res.json()).then((d) => {
    for (data of d) {
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

const pushOpt = (c) => {
  r_option[c].addEventListener("click", function(e) {
    let span = (e.target).querySelectorAll("span")[1];
    selected.push({ el: r_option[c], option: span.innerText });
  });
}

const nextQuest = function() {
  if (10 > counter.value + 1) {
    counter.value++;
  }

  question.value = qtemp[counter.value].question;
  option[0] = qtemp[counter.value].options[0];
  option[1] = qtemp[counter.value].options[1];
  option[2] = qtemp[counter.value].options[2];
  option[3] = qtemp[counter.value].options[3];
}

const prevQuest = function() {
  if (counter.value + 1 > 1) {
    counter.value--;
  }

  question.value = qtemp[counter.value].question;
  option[0] = qtemp[counter.value].options[0];
  option[1] = qtemp[counter.value].options[1];
  option[2] = qtemp[counter.value].options[2];
  option[3] = qtemp[counter.value].options[3];
}


window.onload = function() {
  for (var prop in categories) {
    content += `<option value ="${prop}">${categories[prop]}</option>\n`;
  }

  s2.innerHTML = content;
  s2.value = "general_knowledge";


  var i = 0,
    len = r_option.length;
  for (i = 0; i < len; i++) {
    pushOpt(i);
  }
}