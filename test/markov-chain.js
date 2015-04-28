var test = require('tape');
var MarkovChain = require('../markov-chain');

test('MarkovChain', function (t) {
  t.plan(14);

  function toFixed4(v) {
    return Number(v.toFixed(4));
  }

  function arrayToFixed(array) {
    return array.map(toFixed4);
  }

  var markovChain = MarkovChain();
  // Sunny, Rainy
  markovChain.setInitialStateVector([1, 0]);
  markovChain.setTransitionMatrix([
    [0.9, 0.1],
    [0.5, 0.5]
  ]);

  t.deepEqual(markovChain.getInitialStateVector(), [1, 0]);
  t.deepEqual(markovChain.getTransitionMatrix(), [[0.9, 0.1], [0.5, 0.5]]);
  t.deepEqual(markovChain.nextStateProbability(), [0.9, 0.1]);
  t.deepEqual(markovChain.nextStateProbability(), [0.8600000000000001, 0.14]);
  t.deepEqual(markovChain.getCurrentStateVector(), [0.8600000000000001, 0.14]);
  t.deepEqual(markovChain.getIterationsCount(), 2);

  var markovChain2 = MarkovChain();
  // Cloudy, Rainy, Sunny
  markovChain2.setInitialStateVector([1, 0, 0]);
  markovChain2.setTransitionMatrix([
    [0.1, 0.5, 0.4],
    [0.3, 0.6, 0.1],
    [0.4, 0.1, 0.5]
  ]);

  t.deepEqual(markovChain2.nextStateProbability(), [0.1, 0.5, 0.4]);
  t.deepEqual(markovChain2.nextStateProbability(), [0.32000000000000006, 0.39, 0.29000000000000004]);

  var markovChain3 = MarkovChain();
  // Bull Market, Bear Market, Stagnant Market
  markovChain3.setInitialStateVector([0, 1, 0]);
  markovChain3.setTransitionMatrix([
    [0.9, 0.075, 0.025],
    [0.15, 0.8, 0.05],
    [0.25, 0.25, 0.5]
  ]);

  t.deepEqual(markovChain3.nextStateProbability(), [0.15, 0.8, 0.05]);
  t.deepEqual(markovChain3.nextStateProbability(), [0.2675, 0.6637500000000001, 0.06875]);
  t.deepEqual(markovChain3.nextStateProbability(), [0.35750000000000004, 0.56825, 0.07425000000000001]);
  t.deepEqual(markovChain3.probabilityAtState(2), [0.2675, 0.6637500000000001, 0.06875]);
  t.deepEqual(markovChain3.getCurrentStateVector(), [0.2675, 0.6637500000000001, 0.06875]);
  t.deepEqual(markovChain3.getIterationsCount(), 2);
});
