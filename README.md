# markov-chain

Calculate the probability of the next transition state using [Markov Chains](http://en.wikipedia.org/wiki/Markov_chain).

[![NPM](https://nodei.co/npm/markov-chain.png)](https://nodei.co/npm/markov-chain)

# Demo

[https://lab.miguelmota.com/markov-chain](https://lab.miguelmota.com/markov-chain)

# Install

```bash
npm install markov-chain
```

```bash
bower install markov-chain
```

# Usage

In this example, we calculate the probability of the next state for bull, bear, and stagnant markets.

[State diagram from Wikipedia](http://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Finance_Markov_chain_example_state_space.svg/400px-Finance_Markov_chain_example_state_space.svg.png)

[![State Diagram](http://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Finance_Markov_chain_example_state_space.svg/400px-Finance_Markov_chain_example_state_space.svg.png)](http://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Finance_Markov_chain_example_state_space.svg/400px-Finance_Markov_chain_example_state_space.svg.png)

```javascript
var MarkovChain = require('markov-chain');

var markovChain = MarkovChain();

markovChain.setInitialStateVector([0, 1, 0]); // bull, bear, stagnant
markovChain.setTransitionMatrix([
  [0.9, 0.075, 0.025],
  [0.15, 0.8, 0.05],
  [0.25, 0.25, 0.5]
]);

console.log(markovChain.nextStateProbability()); // [0.15, 0.8, 0.05]
console.log(markovChain.nextStateProbability()); // [0.2675, 0.6637500000000001, 0.06875]
console.log(markovChain.nextStateProbability()); // [0.35750000000000004, 0.56825, 0.07425000000000001]
console.log(markovChain.getIterationsCount()); // 3
console.log(markovChain.getCurrentStateVector()); // [0.35750000000000004, 0.56825, 0.07425000000000001]

console.log(markovChain.probabilityAtState(2)); // [0.2675, 0.6637500000000001, 0.06875]
console.log(markovChain.getIterationsCount()); // 2
```

# License

MIT
