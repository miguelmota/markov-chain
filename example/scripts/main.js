var output = document.getElementById('output');
var initialStateVector = document.getElementById('initial-state-vector');
var transitionMatrix = document.getElementById('transition-matrix');
var iterations = document.getElementById('iterations');

function save() {
  try {
    localStorage.setItem('initialStateVector', JSON.stringify(initialStateVector.value.trim()));
    localStorage.setItem('transitionMatrix', JSON.stringify(transitionMatrix.value.trim()));
    localStorage.setItem('iterations', iterations.value.trim());
  } catch(e) {
    console.error(e);
  }
}

function restore() {
  try {
    var isv = JSON.parse(localStorage.getItem('initialStateVector')).trim();
    if (isv) {
      initialStateVector.value = isv;
    }
    var tm = JSON.parse(localStorage.getItem('transitionMatrix')).trim();
    if (tm) {
      transitionMatrix.value = tm;
    }
    var s = parseInt(localStorage.getItem('iterations').trim());
    if (s) {
      iterations.value = s;
    }
  } catch(e) {
    console.error(e);
  }
}

function update() {
  try {
    var markovChain = MarkovChain();
    markovChain.setInitialStateVector(JSON.parse(initialStateVector.value.trim()));
    markovChain.setTransitionMatrix(JSON.parse(transitionMatrix.value.trim()));

    var probability = markovChain.probabilityAtState(iterations.value);

    output.textContent = JSON.stringify(probability, null, 2);
    save();
  } catch(e) {

  }
}

initialStateVector.onkeyup = update;
transitionMatrix.onkeyup = update;
iterations.onkeyup = update;

restore();
update();
