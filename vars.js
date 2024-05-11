const categories = {
"music" : "Music",
"sport_and_leisure" : "Sports & Leisure",
"film_and_tv" : "Films & Tv",
"arts_and_literature" : "Arts & Lit",
"history" : "History",
"society_and_culture" : "Society & Culture",
"science" : "Science",
"geography" : "Geography",
"food_and_drink" : "Food & Drink",
"general_knowledge" : "General Knowledge"
};

const {iRender, Signal} = QueFlow;
var content = "", diff = "easy", cat = "music", counter = 0, qtemp = [{question: "", options: ["", "", "", ""], correct: "" }, {}, {}, {}, {}, {}, {}, {}, {}, {}], quiz = Signal({question: qtemp[counter].question, option: [...qtemp[counter].options]}),   selected = [];
