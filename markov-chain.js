(function(root) {
  'use strict';

  function MarkovChain() {
    if (!(this instanceof MarkovChain)) {
      return new MarkovChain();
    }

    this.initialStateVector = [];
    this.currentStateVector = [];
    this.transitionStateMatrix = [];
    this.iterationsCount = 0;
  }

  MarkovChain.prototype.setInitialStateVector = function(vector) {
    this.initialStateVector = vector;
    this.currentStateVector = vector;
  };

  MarkovChain.prototype.getInitialStateVector = function() {
    return this.initialStateVector;
  };

  MarkovChain.prototype.setTransitionMatrix = function(matrix) {
    this.transitionStateMatrix = matrix;
  };

  MarkovChain.prototype.getTransitionMatrix = function() {
    return this.transitionStateMatrix;
  };

  MarkovChain.prototype.getIterationsCount = function() {
    return this.iterationsCount;
  };

  MarkovChain.prototype.getCurrentStateVector = function() {
    return this.currentStateVector;
  };

  MarkovChain.prototype.nextStateProbability = function() {
    var CS = this.currentStateVector;
    var TM = this.transitionStateMatrix;
    var vector = [];

    for (var i = 0; i < CS.length; i++) {
      var value = 0;
      for (var j = 0; j < TM.length; j++) {
        value += (CS[j]*TM[j][i]);
      }
      vector = vector.concat(value);
    }

    this.currentStateVector = vector;
    this.iterationsCount += 1;

    return vector;
  };

  MarkovChain.prototype.probabilityAtState = function(state) {
    this.iterationsCount = 0;
    this.currentStateVector = this.initialStateVector;
    for (var i = 0; i < state; i++) {
      this.nextStateProbability();
    }
    return this.getCurrentStateVector();
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = MarkovChain;
    }
    exports.MarkovChain = MarkovChain;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return MarkovChain;
    });
  } else {
    root.MarkovChain = MarkovChain;
  }

})(this);
