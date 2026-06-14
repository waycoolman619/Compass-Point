const state = {
  screen: "list",
  searchQuery: "",
  questionId: null,
  audience: null
};

const screens = {
  list: document.getElementById("screen-list"),
  bearings: document.getElementById("screen-bearings"),
  answer: document.getElementById("screen-answer")
};

const searchInput = document.getElementById("search");
const questionList = document.getElementById("question-list");
const noResults = document.getElementById("no-results");
const bearingsQuestion = document.getElementById("bearings-question");
const audienceButtons = document.getElementById("audience-buttons");
const answerQuestion = document.getElementById("answer-question");
const answerAudience = document.getElementById("answer-audience");
const answerContent = document.getElementById("answer-content");
const answerEmpty = document.getElementById("answer-empty");
const answerStrategy = document.getElementById("answer-strategy");
const answerPoints = document.getElementById("answer-points");
const crossRefBar = document.getElementById("cross-ref-bar");

function getQuestion(id) {
  return QUESTIONS.find((q) => q.id === id);
}

function getFilteredQuestions() {
  const query = state.searchQuery.toLowerCase().trim();
  if (!query) return QUESTIONS;
  return QUESTIONS.filter((q) => q.question.toLowerCase().includes(query));
}

function showScreen(name) {
  state.screen = name;
  Object.entries(screens).forEach(([key, el]) => {
    el.classList.toggle("active", key === name);
    el.classList.toggle("hidden", key !== name);
  });
}

function renderList() {
  const questions = getFilteredQuestions();
  questionList.innerHTML = "";

  questions.forEach((q) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = q.question;
    btn.addEventListener("click", () => openBearings(q.id));
    li.appendChild(btn);
    questionList.appendChild(li);
  });

  noResults.classList.toggle("hidden", questions.length > 0);
}

function openBearings(questionId) {
  const question = getQuestion(questionId);
  if (!question) return;

  state.questionId = questionId;
  bearingsQuestion.textContent = question.question;

  audienceButtons.innerHTML = "";
  AUDIENCE_ORDER.forEach((audienceId) => {
    if (!question.audiences[audienceId]) return;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = AUDIENCE_LABELS[audienceId];
    btn.addEventListener("click", () => openAnswer(audienceId));
    audienceButtons.appendChild(btn);
  });

  showScreen("bearings");
}

function openAnswer(audienceId) {
  state.audience = audienceId;
  renderAnswer();
  showScreen("answer");
}

function switchAudience(audienceId) {
  state.audience = audienceId;
  renderAnswer();
}

function renderAnswer() {
  const question = getQuestion(state.questionId);
  if (!question) return;

  const answer = question.audiences[state.audience];
  const available = AUDIENCE_ORDER.filter((id) => question.audiences[id]);

  answerQuestion.textContent = question.question;
  answerAudience.textContent = "For: " + AUDIENCE_LABELS[state.audience];

  if (answer) {
    answerContent.classList.remove("hidden");
    answerEmpty.classList.add("hidden");
    answerStrategy.textContent = answer.strategy;
    answerPoints.innerHTML = answer.talking_points
      .map((point) => "<li>" + escapeHtml(point) + "</li>")
      .join("");
  } else {
    answerContent.classList.add("hidden");
    answerEmpty.classList.remove("hidden");
  }

  crossRefBar.innerHTML = "";
  available.forEach((audienceId) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip" + (audienceId === state.audience ? " active" : "");
    chip.textContent = AUDIENCE_LABELS[audienceId];
    chip.addEventListener("click", () => switchAudience(audienceId));
    crossRefBar.appendChild(chip);
  });
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function goHome() {
  state.questionId = null;
  state.audience = null;
  showScreen("list");
}

searchInput.addEventListener("input", (e) => {
  state.searchQuery = e.target.value;
  renderList();
});

document.getElementById("bearings-back").addEventListener("click", goHome);
document.getElementById("answer-back").addEventListener("click", goHome);

renderList();
