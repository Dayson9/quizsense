const {iRender, Signal} = QueFlow;
var question = Signal("What type of galaxy is the milky way?"), counter = Signal([0, 10]), option = Signal({a: "Irregular Galaxy", b: "Elliptical Galaxy", c: "Spiral Galaxy", d: "Circular Galaxy"});

iRender("app");

const intro = document.getElementById("intro");

const startQuiz = function(){
intro.style.left = "-100vw";
}