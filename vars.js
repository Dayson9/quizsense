const categories = {
  "geography": "Geography",
  "biology": "Biology",
  "physics": "Physics",
  "mathematics": "Mathematics",
  "music": "Music",
  "sport_and_leisure": "Sports & Leisure",
  "film_and_tv": "Films & Tv",
  "arts_and_literature": "Arts & Lit",
  "history": "History",
  "society_and_culture": "Society & Culture",
  "science": "Science",
  "food_and_drink": "Food & Drink",
  "general_knowledge": "General Knowledge"
};

const { iRender, Signal } = QueFlow;
var content = "",
  diff = "easy",
  cat = "music",
  counter = Signal(0),
  qtemp = [{ question: "", options: ["", "", "", ""], correct: "" }, {}, {}, {}, {}, {}, {}, {}, {}, {}],
  question = Signal("How many continents do we have?"),
  option = Signal(["", "", "", ""]),
  selected = [],
  result = Signal({ score: 10, percentage: "100%" });